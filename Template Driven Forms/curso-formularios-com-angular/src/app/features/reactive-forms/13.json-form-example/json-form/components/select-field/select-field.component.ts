import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ErrorMessagesComponent } from '../../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { FormsModule } from '@angular/forms';
import { JsonFormFieldSchema } from '../../interfaces/form.schema.interface';
import { BaseField } from '../shared/base-field/base-field';

@Component({
  selector: 'app-select-field',
  imports: [ErrorMessagesComponent,FormsModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
//export class SelectFieldComponent {
export class SelectFieldComponent extends BaseField  {
  label = input.required<string>();
  placeholder = input<string>();
  options = input.required<JsonFormFieldSchema['options']>();
}
