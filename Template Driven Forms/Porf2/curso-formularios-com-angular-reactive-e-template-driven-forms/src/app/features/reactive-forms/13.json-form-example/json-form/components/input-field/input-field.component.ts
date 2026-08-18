import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  inject,
  Injector,
  input,
  runInInjectionContext,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { ErrorMessagesComponent } from '../../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { BaseField } from '../shared/base-field/base-field';

export type InputFieldType = 'text' | 'email' | 'password';

@Component({
  selector: 'app-input-field',
  imports: [FormsModule, ErrorMessagesComponent],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent extends BaseField {
  label = input.required<string>();
  placeholder = input<string>();
  type = input.required<InputFieldType>();
}
