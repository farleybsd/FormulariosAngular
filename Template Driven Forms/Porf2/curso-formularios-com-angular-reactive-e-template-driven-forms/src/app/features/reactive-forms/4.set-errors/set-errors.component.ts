import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { required } from '@angular/forms/signals';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

@Component({
  selector: 'app-set-errors',
  imports: [ReactiveFormsModule, JsonPipe, ErrorMessagesComponent],
  templateUrl: './set-errors.component.html',
  styleUrl: './set-errors.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetErrorsComponent {
  protected nameControl = new FormControl();

  constructor() {
    this.nameControl.statusChanges.subscribe(console.log);
  }

  protected setError() {
    this.nameControl.setErrors(
      {
        required: true,
      },
      {
        emitEvent: false,
      },
    );
  }
}
