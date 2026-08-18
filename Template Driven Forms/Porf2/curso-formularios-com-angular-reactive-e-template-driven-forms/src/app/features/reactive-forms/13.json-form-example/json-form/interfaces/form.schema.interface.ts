import { ValidatorFn } from '@angular/forms';
import { FieldType } from '../enums/field-type.enum';

export interface JsonFormSchema {
  submitLabel: string;
  fields: JsonFormFieldSchema[];
  validators?: ValidatorFn[];
}

export interface JsonFormFieldSchema {
  name: string;
  label: string;
  placeholder?: string;
  intialValue: unknown;
  required: boolean;
  type: FieldType;
  options?: { value: unknown; label: string }[];
  validators?: ValidatorFn[];
}
