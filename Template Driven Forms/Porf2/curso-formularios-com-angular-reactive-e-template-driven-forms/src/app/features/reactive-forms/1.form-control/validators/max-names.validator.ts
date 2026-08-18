import { AbstractControl, ValidationErrors } from '@angular/forms';

export function maxNamesValidator(quantity: number) {
  return function validator(control: AbstractControl<string | null>): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const length = control.value.split(' ').filter((item) => Boolean(item)).length;

    if (length <= quantity) {
      return null;
    }

    return {
      invalidMaxNames: {
        maxQuantity: quantity,
        currentQuantity: length
      },
    };
  };
}
