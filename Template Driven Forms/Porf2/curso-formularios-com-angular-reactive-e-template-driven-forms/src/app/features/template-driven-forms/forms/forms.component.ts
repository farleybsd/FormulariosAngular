import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IsPasswordEqualDirective } from './validators/is-password-equal/is-password-equal.directive';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, JsonPipe, IsPasswordEqualDirective, ErrorMessagesComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {
  protected onSubmit(form: NgForm) {
    console.log('form', form.value);
  }
}
