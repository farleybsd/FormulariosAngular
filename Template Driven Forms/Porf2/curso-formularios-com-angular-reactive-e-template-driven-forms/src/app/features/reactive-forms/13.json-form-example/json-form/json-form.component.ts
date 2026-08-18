import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { JsonFormFieldSchema, JsonFormSchema } from './interfaces/form.schema.interface';
import {
  FormControl,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FieldType } from './enums/field-type.enum';
import { ErrorMessagesComponent } from '../../../../shared/error-messages/components/error-messages/error-messages.component';
import { JsonPipe } from '@angular/common';
import { InputFieldComponent } from "./components/input-field/input-field.component";
import { SelectFieldComponent } from "./components/select-field/select-field.component";

const fieldTypeValidators = new Map<FieldType, ValidatorFn[]>([
  [FieldType.Email, [Validators.email]],
]);

@Component({
  selector: 'app-json-form',
  imports: [FormsModule, ReactiveFormsModule, ErrorMessagesComponent, JsonPipe, InputFieldComponent, SelectFieldComponent],
  templateUrl: './json-form.component.html',
  styleUrl: './json-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent {
  private fb = inject(NonNullableFormBuilder);

  schema = input.required<JsonFormSchema>();

  protected submitOutput = output<Record<string, unknown>>({
    alias: 'formSubmit',
  });

  protected fieldType = FieldType;

  protected submitLabel = computed(() => this.schema().submitLabel);

  protected fields = computed(() => this.schema().fields);

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

  protected submit() {
    this.submitOutput.emit(this.form().value);
  }

  private createFormControl(field: JsonFormFieldSchema) {
    const control = this.fb.control(field.intialValue);

    if (field.required) {
      control.addValidators(Validators.required);
    }

    if (fieldTypeValidators.has(field.type)) {
      control.addValidators(fieldTypeValidators.get(field.type)!);
    }

    if (field.validators) {
      control.addValidators(field.validators);
    }

    return control;
  }
}
