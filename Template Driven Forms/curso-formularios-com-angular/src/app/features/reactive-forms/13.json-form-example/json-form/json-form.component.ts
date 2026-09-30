import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { JsonChema, JsonFormFieldSchema } from './interfaces/form.schema.interface';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FieldType } from './enums/fiel-type.enum';
import { ErrorMessagesComponent } from '../../../../shared/error-messages/components/error-messages/error-messages.component';
import { JsonPipe } from '@angular/common';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';

const fielTypeValidators = new Map<FieldType, ValidatorFn[]>([
  [FieldType.Email, [Validators.email]],
]);

@Component({
  selector: 'app-json-form',
  imports: [ReactiveFormsModule, ErrorMessagesComponent, JsonPipe,InputFieldComponent,SelectFieldComponent],
  templateUrl: './json-form.component.html',
  styleUrl: './json-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent {
  private fb = inject(NonNullableFormBuilder);

  schema = input.required<JsonChema>();

  protected submitOutput = output<Record<string, unknown>>({
    alias: 'formSubmit',
  });

  protected fieldType = FieldType;

  protected fields = computed(() => this.schema().fields);
  protected submiteLabel = computed(() => this.schema().submiteLabel);
  protected formValidators = computed(() => this.schema().validators);

  protected formControls = computed(() => {
    return this.fields().reduce<Record<string, FormControl>>((controls, field) => {
      controls[field.name] = this.createFormControl(field);
      return controls;
    }, {});
  });

  protected form = computed(() =>
    this.fb.record(this.formControls(), {
      validators: this.formValidators(),
    }),
  );

  submit() {
    this.submitOutput.emit(this.form().value);
  }

  private createFormControl(field: JsonFormFieldSchema) {
    const control = this.fb.control(field.initialValue);

    if (field.required) {
      control.addValidators(Validators.required);
    }
    if (fielTypeValidators.has(field.type)) {
      control.addValidators(fielTypeValidators.get(field.type)!);
    }
    if (field.validators) {
      control.addValidators(field.validators);
    }
    return control;
  }
}
