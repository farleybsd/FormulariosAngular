import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ErrorMessagesComponent } from '../../../../../../shared/error-messages/components/error-messages/error-messages.component';
import {
  FormsModule,
} from '@angular/forms';
import { BaseField } from '../shared/base-field/base-field';

export type InputFieldType = 'text' | 'email' | 'password';

@Component({
  selector: 'app-input-field',
  imports: [ErrorMessagesComponent, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   multi: true,
    //   useExisting: forwardRef(() => InputFieldComponent),
    // },
  ],
})
//export class InputFieldComponent implements ControlValueAccessor {
export class InputFieldComponent extends BaseField {
  label = input.required<string>();
  placeholder = input<string>();
  type = input.required<InputFieldType>();


}
