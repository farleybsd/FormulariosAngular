import { AbstractControl, ValidationErrors } from '@angular/forms';

export function arePasswordsEqualValidator(field1: string, field2: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value1 = control.get(field1)?.value;
    const value2 = control.get(field2)?.value;

    if (value1 !== value2) {
      return {
        passwordsAreNotEqual: {
          field1,
          field2,
        },
      };
    }

    return null;
  };
}
