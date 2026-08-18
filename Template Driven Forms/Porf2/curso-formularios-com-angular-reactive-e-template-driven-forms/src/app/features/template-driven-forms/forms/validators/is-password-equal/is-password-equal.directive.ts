import { Directive, forwardRef, input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appIsPasswordEqual]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IsPasswordEqualDirective),
      multi: true,
    },
  ],
})
export class IsPasswordEqualDirective implements Validator, OnChanges {
  private changeFn = () => {};

  fields = input<string[] | null>(null, { alias: 'appIsPasswordEqual' });

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      if (changes[key].previousValue !== changes[key].currentValue) {
        this.changeFn();
      }
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.fields() === null) {
      return null;
    }

    const [field1, field2] = this.fields() as string[];

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
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.changeFn = fn;
  }
}
