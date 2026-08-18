import { Directive, forwardRef, input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appIncludeWordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IncludeWordValidatorDirective),
      multi: true,
    },
  ],
})
export class IncludeWordValidatorDirective implements Validator, OnChanges {
  word = input.required<string>({ alias: 'appIncludeWordValidator' });

  private changeFn = () => {};

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      if(changes[key].previousValue !== changes[key].currentValue) {
        this.changeFn();
      }
    }
  }

  validate(control: AbstractControl<string | null>): ValidationErrors | null {
    const hasWord = Boolean(control.value?.includes(this.word()));

    if (hasWord) {
      return null;
    }

    return {
      includeWord: {
        requiredWord: this.word(),
      },
    };
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.changeFn = fn;
  }
}
