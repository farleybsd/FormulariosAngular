import { ValidatorFn } from "@angular/forms";
import { FieldType } from "../enums/fiel-type.enum";

export interface JsonChema{
  submiteLabel: string;
  fields: JsonFormFieldSchema[];
  validators?: ValidatorFn[];
}
export interface JsonFormFieldSchema{
  name: string;
  label: string;
  placeholder: string;
  initialValue: unknown;
  required:boolean;
  type:FieldType;
  options?: {value: unknown,label:string}[],
  validators?: ValidatorFn[]
}
