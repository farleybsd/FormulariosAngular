import { AbstractControl, ValidationErrors } from '@angular/forms';

export function fullNameValidator(control: AbstractControl<string | null>): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const length = control.value.split(' ').filter((item) => Boolean(item)).length;

  if (length > 1) {
    return null;
  }

  return {
    invalidFullname: true
  }
}
