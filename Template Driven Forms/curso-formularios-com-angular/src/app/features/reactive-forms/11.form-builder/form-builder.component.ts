import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControlOptions, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule,ErrorMessagesComponent,JsonPipe],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent {
  //private fb = inject(FormBuilder); tem que colocar nao null por campoi
  private fb = inject(NonNullableFormBuilder); // colocar o NonNullableFormBuilder para todos os campos esse e mais indicado volta para o valor inicial

  protected form = this.fb.group({
    name: ['', {
      validators: [Validators.required],
      updateOn: 'blur', // usar apenas com  FormBuilder
    } as FormControlOptions],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }),
  });
}
