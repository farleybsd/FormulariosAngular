import { CanActivateFn } from '@angular/router';
import { Step } from '../enums/steps.enum';
import { inject } from '@angular/core';
import { FormStateService } from '../stores/form-state.service';

export function canAccessStepGuard(step: Step) {
  const fn: CanActivateFn = (route, state) => {

    const formState = inject(FormStateService);

    formState.personalForm.valid;

    const canAccess =
      step === Step.Personal ||
      (step == Step.Address && formState.personalForm.valid) ||
      (step == Step.Payment && formState.addressForm.valid)  ||
      (step == Step.Confirmation && formState.paymentForm.valid);

    if (canAccess) {
      return true;
    }
    return false;
  };

  return fn;
}
