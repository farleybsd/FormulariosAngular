import { CanActivateFn } from '@angular/router';
import { Steps } from '../enums/steps.enum';
import { inject } from '@angular/core';
import { FormStateService } from '../stores/form-state.service';

export function canAccessStepGuard(step: Steps) {
  const fn: CanActivateFn = (route, state) => {
    const formState = inject(FormStateService);

    formState.personalForm.valid;
    const canAccess =
      step === Steps.Personal ||
      (step === Steps.Address && formState.personalForm.valid) ||
      (step === Steps.Payment && formState.addressForm.valid) ||
      (step === Steps.Confirmation && formState.paymentForm.valid);

    if (canAccess) {
      return true;
    }

    return false;
  };

  return fn;
}
