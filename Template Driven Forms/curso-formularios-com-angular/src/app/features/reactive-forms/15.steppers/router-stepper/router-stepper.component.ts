import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { FormStateService } from './stores/form-state.service';
import { Step } from './enums/steps.enum';



@Component({
  selector: 'app-router-stepper',
  imports: [RouterModule],
  templateUrl: './router-stepper.component.html',
  styleUrl: './router-stepper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [FormStateService], // injencao de dependencia local, cada componente que injetar terá sua própria instância
})
export class RouterStepperComponent {

  private router = inject(Router);

  protected currentStep = signal(Step.Personal);
  protected steps = signal([
    { label: 'Dados Pessoais', route: 'personal', order: Step.Personal },
    { label: 'Endereço', route: 'address', order: Step.Address },
    { label: 'Dados de Pagamento', route: 'payment', order: Step.Payment },
    { label: 'Confirmação', route: 'confirmation', order: Step.Confirmation },
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
          this.currentStep.set(Step.Personal);
        }
      });
  }
}
