import { AbstractControl, ValidationErrors } from "@angular/forms";

export function fullNameValidator(control:AbstractControl<string | null>) : ValidationErrors | null {

  if(!control.value) {
    return null;
  }

  const length = control.value.split(' ').filter(name => Boolean(name)).length;

  if(length > 1) {
    return null;
  }

  return { invalidFullName: true };;
}
