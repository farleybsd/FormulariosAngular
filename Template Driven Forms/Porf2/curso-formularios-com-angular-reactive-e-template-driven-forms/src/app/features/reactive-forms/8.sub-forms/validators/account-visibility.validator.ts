import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { AccountType } from '../enums/account-type.enum';
import { AccountVisibility } from '../enums/account-visibility.enum';

interface AccountVisibilityValidatorOptions {
  accountType: string | string[];
  visibility: string | string[];
}

export function accountVisibilityValidator(
  options: AccountVisibilityValidatorOptions,
): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const accountType = form.get(options.accountType)?.value;
    const visibility = form.get(options.visibility)?.value;

    if (accountType === AccountType.FREE && visibility == AccountVisibility.PRIVATE) {
      return {
        privateNotAllowed: true,
      };
    }

    return null;
  };
}
