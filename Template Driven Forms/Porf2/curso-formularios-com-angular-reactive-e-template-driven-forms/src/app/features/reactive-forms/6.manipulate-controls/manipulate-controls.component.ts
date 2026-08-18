import { KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

function checkIfFieldNameExists(form: FormGroup): ValidatorFn {
  return (control: AbstractControl) => {
    const exists = form.contains(control.value);

    if (exists) {
      return {
        fieldNameExists: true,
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-manipulate-controls',
  imports: [ReactiveFormsModule, KeyValuePipe, ErrorMessagesComponent],
  templateUrl: './manipulate-controls.component.html',
  styleUrl: './manipulate-controls.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManipulateControlsComponent {
  protected previewForm = new FormGroup({});

  protected form = new FormGroup({
    fieldName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, checkIfFieldNameExists(this.previewForm)],
    }),
    initialValue: new FormControl('', {
      nonNullable: true,
    }),
    isRequired: new FormControl(false, {
      nonNullable: true,
    }),
  });

  protected createNewField() {
    const { fieldName, initialValue, isRequired } = this.form.value as Required<
      typeof this.form.value
    >;

    const control = new FormControl(initialValue);

    if (isRequired) {
      control.addValidators(Validators.required);
    }

    this.previewForm.addControl(fieldName, control);

    this.form.reset();
  }

  protected removeField(fieldName: string) {
    this.previewForm.removeControl(fieldName);
  }
}
