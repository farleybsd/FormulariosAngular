import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const errorMessages: Record<string,string> = {
  required: 'Campo Obrigatorio',
  email: 'Email esta invalido'
}

@Component({
  selector: 'app-error-messages',
  imports: [],
  templateUrl: './error-messages.component.html',
  styleUrl: './error-messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessagesComponent implements OnInit {

  control = input.required<AbstractControl>();
  currentErrorMessage = signal<string | null>(null);

  ngOnInit(): void {

    this.control().valueChanges.subscribe(() => {
      if (this.control().errors === null) {
        this.currentErrorMessage.set(null);
        return;
      }

      for (const key in this.control().errors) {
        const element = this.control().errors![key];
        const message = errorMessages[key]

        if(message){
          this.currentErrorMessage.set(message)
          break;
        }
      }
    });
  }
}
