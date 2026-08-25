import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule,JsonPipe,ErrorMessagesComponent],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent {

  protected form = new FormGroup({
    name: new FormControl('',{
      validators: [Validators.required],
    }),
    email: new FormControl('',{
      validators: [Validators.required, Validators.email],
    }),
  });
  protected submit(event: Event): void {
    console.log('event', event);
    console.log('form', this.form.value);
  }
}
