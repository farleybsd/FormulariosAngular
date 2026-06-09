import { Routes } from '@angular/router';
import { RouterStepperComponent } from './router-stepper.component';
import { PersonalComponent } from './steps/personal/personal.component';
import { AddressComponent } from './steps/address/address.component';
import { PaymentComponent } from './steps/payment/payment.component';
import { ConfirmationComponent } from './steps/confirmation/confirmation.component';
import { canAccessStepGuard } from './guards/can-access-step.guard';
import { Steps } from './enums/steps.enum';
import { FormStateService } from './stores/form-state.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RouterStepperComponent,
    providers: [FormStateService],
    children: [
      {
        path: 'personal',
        canActivate: [canAccessStepGuard(Steps.Personal)],
        component: PersonalComponent,
      },
      {
        path: 'address',
        canActivate: [canAccessStepGuard(Steps.Address)],
        component: AddressComponent,
      },
      {
        path: 'payment',
        canActivate: [canAccessStepGuard(Steps.Payment)],
        component: PaymentComponent,
      },
      {
        path: 'confirmation',
        canActivate: [canAccessStepGuard(Steps.Confirmation)],
        component: ConfirmationComponent,
      },
    ],
  },
];
