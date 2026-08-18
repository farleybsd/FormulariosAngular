import { signal, inject, effect, afterNextRender } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';

export class BaseField implements ControlValueAccessor{
  protected value = signal('');
  protected isDisabled = signal(false);
  protected control = signal<AbstractControl | null>(null);

  protected changeFn = (value: string) => {};
  protected touchedFn = () => {};

  protected ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    afterNextRender(() => {
      if (this.ngControl) {
        this.control.set(this.ngControl.control);
      }
    });

    effect(() => {
      this.changeFn(this.value());
    });
  }

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
