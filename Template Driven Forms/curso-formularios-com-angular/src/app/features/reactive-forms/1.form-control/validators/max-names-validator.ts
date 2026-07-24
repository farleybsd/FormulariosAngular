import { AbstractControl, ValidationErrors } from '@angular/forms';

export function maxNameValidator(quantity: number) {
  return function validator(control: AbstractControl<string | null>): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const length = control.value.split(' ').filter((name) => Boolean(name)).length;

    if (length <= quantity) {
      return null;
    }

    return {
      invalidMaxNames: {
        maxQuantity: quantity,
        currentQuantity: length,
      },
    };
  };
}
