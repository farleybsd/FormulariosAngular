import { Routes } from '@angular/router';
import { RouterStepperComponent } from './router-stepper.component';
import { PersonalComponent } from './steps/personal/personal.component';
import { AddresComponent } from './steps/addres/addres.component';
import { PaymentComponent } from './steps/payment/payment.component';
import { ConfirmationComponent } from './steps/confirmation/confirmation.component';
import { FormStateService } from './stores/form-state.service';
import { Step } from './enums/steps.enum';
import { canAccessStepGuard } from './guards/can-access-step.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RouterStepperComponent,
    providers: [FormStateService], // local state service, não é singleton, cada componente que injetar terá sua própria instância
    children: [
      {
        path: 'personal',
        canActivate: [canAccessStepGuard(Step.Personal)],
        component:PersonalComponent
      },
      {
        path: 'address',
        canActivate: [canAccessStepGuard(Step.Address)],
        component:AddresComponent
      },
      {
        path: 'payment',
        canActivate: [canAccessStepGuard(Step.Payment)],
        component:PaymentComponent
      },
      {
        path: 'confirmation',
        canActivate: [canAccessStepGuard(Step.Confirmation)],
        component:ConfirmationComponent
      }
    ]
  },
];
