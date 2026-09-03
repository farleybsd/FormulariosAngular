import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AccountVisibility } from '../enums/account-visiblity-type.enum';
import { AccountType } from '../enums/account-type.enum';

interface AccountVisibilityValidatorOptions {
  accountType: string | string[];
  visibility: string | string[];
}

export function accountVisibilityValidator(options: AccountVisibilityValidatorOptions): ValidatorFn  {
  //Utilizando a propriedade .parent para acesso o pai
  //const accountType = control.parent?.parent?.get('accountType')?.value;

  return (form: AbstractControl): ValidationErrors | null => {
    //Utilizando a propriedade .root
    const accountType =form.get(options.accountType)?.value;
    const visibility = form.get(options.visibility)?.value;

    if (accountType === AccountType.FREE && visibility === AccountVisibility.PRIVATE) {
      return { privateNotAllowed: true };
    }

    return null;
  };
}
