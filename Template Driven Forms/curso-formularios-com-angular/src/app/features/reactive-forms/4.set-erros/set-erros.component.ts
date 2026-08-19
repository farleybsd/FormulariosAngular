import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

@Component({
  selector: 'app-set-erros',
  imports: [ReactiveFormsModule,JsonPipe,ErrorMessagesComponent],
  templateUrl: './set-erros.component.html',
  styleUrl: './set-erros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetErrosComponent {

  constructor() {
    this.nameControl.statusChanges.subscribe(console.log);
  }

  protected nameControl = new FormControl();

  protected setErrors() {
    this.nameControl.setErrors({
      required: true
    },{
      emitEvent: true
    });
  }
}
