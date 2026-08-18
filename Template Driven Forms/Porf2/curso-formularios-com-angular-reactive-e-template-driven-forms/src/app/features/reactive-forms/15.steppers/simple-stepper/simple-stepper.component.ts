import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  Type,
} from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalDataStepComponent } from './personal-data-step/personal-data-step.component';
import { JsonPipe, NgComponentOutlet } from '@angular/common';
import { AddressDataStepComponent } from './address-data-step/address-data-step.component';
import { PaymentDataStepComponent } from './payment-data-step/payment-data-step.component';
import { ConfirmationStepComponent } from './confirmation-step/confirmation-step.component';
import { CurrentStepManagerService } from './services/current-step-manager.service';
import { SessionManagerService } from './services/session-manager.service';

interface Step {
  label: string;
  component: Type<any>;
}

@Component({
  selector: 'app-simple-stepper',
  imports: [ReactiveFormsModule, NgComponentOutlet],
  templateUrl: './simple-stepper.component.html',
  styleUrl: './simple-stepper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CurrentStepManagerService],
})
export class SimpleStepperComponent {
  private fb = inject(NonNullableFormBuilder);
  private currentStepManagerService = inject(CurrentStepManagerService);
  private sessionManagerService = inject(SessionManagerService);

  protected form = this.fb.group({
    personal: this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    }),
    address: this.fb.group({
      zipcode: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: '',
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    }),
    payment: this.fb.group({
      creditCard: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expiry: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    }),
  });

  protected steps = signal<Step[]>([
    {
      label: 'Dados Pessoais',
      component: PersonalDataStepComponent,
    },
    {
      label: 'Endereço',
      component: AddressDataStepComponent,
    },
    {
      label: 'Dados de pagamento',
      component: PaymentDataStepComponent,
    },
    {
      label: 'Confirmação',
      component: ConfirmationStepComponent,
    },
  ]);

  protected currentStep = computed(() => {
    return this.currentStepManagerService.currentStep();
  });

  protected currentStepComponent = computed(() => {
    const stepIndex = this.currentStepManagerService.currentStep() - 1;
    return this.steps()[stepIndex].component;
  });

  constructor() {
    this.syncSession();

    this.form.valueChanges.subscribe(() => {
      this.saveSession();
    });

    effect(() => {
      this.saveSession();
    });
  }

  submit() {
    console.log(this.form.value);
  }

  private saveSession() {
    this.sessionManagerService.setSession({
      step: this.currentStep(),
      formData: this.form.value,
    });
  }

  private syncSession() {
    const session = this.sessionManagerService.getSession();

    if (session) {
      this.form.patchValue(session.formData as any);
      this.currentStepManagerService.setStep(session.step);
    }
  }
}
