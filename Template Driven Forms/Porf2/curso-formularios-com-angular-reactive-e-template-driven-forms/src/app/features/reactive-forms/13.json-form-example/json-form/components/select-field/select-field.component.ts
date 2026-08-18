import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { ErrorMessagesComponent } from '../../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { AbstractControl, FormsModule, NgControl } from '@angular/forms';
import { InputFieldType } from '../input-field/input-field.component';
import { JsonFormFieldSchema } from '../../interfaces/form.schema.interface';
import { BaseField } from '../shared/base-field/base-field';

@Component({
  selector: 'app-select-field',
  imports: [ErrorMessagesComponent, FormsModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFieldComponent extends BaseField {
  label = input.required<string>();
  placeholder = input<string>();
  options = input.required<JsonFormFieldSchema['options']>();
}
