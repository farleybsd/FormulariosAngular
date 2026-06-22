import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { filter } from 'rxjs';

const errorMessages: Record<string,(...args:any[]) => string> = {
  required: () => 'Campo Obrigatorio',
  email:    () => 'Email esta invalido',
  passwordAreNotEqual: ({field1,field2}) => `A senha do campo "${field1}" nao e igual a do campo "${field2}" `,
  isNicknameTaken: () => 'Nickname já está em uso',
  minlength: ({requiredLength,actualLength}) => `O Valor deve conter no minino ${requiredLength} caracteres (atualmente ${actualLength})`
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
  showPendingMessage = signal(false);

  ngOnInit(): void {

    this.control().events
    .pipe(
      filter(() => this.control().touched || this.control().dirty)
    )
    .subscribe(() => {

      this.showPendingMessage.set(this.control().pending)

      if (this.control().errors === null) {
        this.currentErrorMessage.set(null);
        return;
      }

      for (const key in this.control().errors) {

        const messageFn = errorMessages[key]
        const errorData = this.control().errors![key];
        if(messageFn){
          this.currentErrorMessage.set(messageFn(errorData))
          break;
        }
      }
    });
  }
}
