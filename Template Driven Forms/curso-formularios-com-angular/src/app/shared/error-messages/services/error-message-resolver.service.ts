import { inject, Injectable } from '@angular/core';
import { ERROR_MESSAGES } from '../components/error-messages/tokens/error-messages.component';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageResolverService {

  private errorMessages = inject(ERROR_MESSAGES);

  get pendingMessage(){
    return this.errorMessages.pendingMessage;
  }

  getMessage(erros: ValidationErrors) {
    for (const key in erros) {
      const messageFn = this.errorMessages.errorMessages[key];

      if (messageFn) {
        const errorData = erros[key];
        return messageFn(errorData);
      }
    }
    return null;
  }
}
