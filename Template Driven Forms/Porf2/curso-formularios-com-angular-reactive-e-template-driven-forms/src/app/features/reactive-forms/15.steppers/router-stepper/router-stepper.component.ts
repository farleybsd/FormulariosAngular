import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { FormStateService } from './stores/form-state.service';
import { Steps } from './enums/steps.enum';

@Component({
  selector: 'app-router-stepper',
  imports: [RouterModule],
  templateUrl: './router-stepper.component.html',
  styleUrl: './router-stepper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterStepperComponent {
  private router = inject(Router);

  protected currentStep = signal(Steps.Personal);

  protected steps = signal([
    {
      route: 'personal',
      label: 'Dados Pessoais',
      order: Steps.Personal,
    },
    {
      route: 'address',
      label: 'Endereço',
      order: Steps.Address,
    },
    {
      route: 'payment',
      label: 'Dados de Pagamento',
      order: Steps.Payment,
    },
    {
      route: 'confirmation',
      label: 'Confirmação',
      order: Steps.Confirmation,
    },
  ]);

  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd),
        map((event) => event.urlAfterRedirects),
        map((url) => url.split('/').pop()),
      )
      .subscribe((stepRoute) => {
        const step = this.steps().find((item) => item.route === stepRoute);

        if (step) {
          this.currentStep.set(step.order);
        } else {
          this.currentStep.set(Steps.Personal);
        }
      });
  }
}
