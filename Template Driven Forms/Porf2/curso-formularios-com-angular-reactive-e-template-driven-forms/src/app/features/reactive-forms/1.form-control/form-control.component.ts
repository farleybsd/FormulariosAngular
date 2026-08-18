import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { fullNameValidator } from './validators/full-name.validator';
import { maxNamesValidator } from './validators/max-names.validator';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';
import { checkSimilarNameValidator } from './validators/check-similar-name.validator';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule, JsonPipe, ErrorMessagesComponent],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent {
  protected nameControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
      fullNameValidator,
      maxNamesValidator(2),
    ],
    asyncValidators: [
      checkSimilarNameValidator()
    ]
  });

  protected reset() {
    this.nameControl.reset();
  }
}
