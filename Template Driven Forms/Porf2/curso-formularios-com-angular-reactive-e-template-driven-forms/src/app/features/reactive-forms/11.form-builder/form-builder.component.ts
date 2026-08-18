import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControlOptions,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, ErrorMessagesComponent, JsonPipe],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent {
  private fb = inject(NonNullableFormBuilder);

  protected form = this.fb.group({
    name: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'blur',
      } as FormControlOptions,
    ],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }),
  });
}
