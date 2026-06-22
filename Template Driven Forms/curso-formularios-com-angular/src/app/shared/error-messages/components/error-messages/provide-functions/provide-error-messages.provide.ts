import { inject, Provider } from "@angular/core";
import { TErrorMessages } from "../types/error-messages.types";
import { ERROR_MESSAGES } from "../tokens/error-messages.component";
import { DEFAULT_ERROR_MESSAGES } from "../tokens/default-error-messages.component";

type tProvideErrorMessagesParams = Omit<TErrorMessages,'pendingMessage'> & {
pendingMessage?: string
};

export function provideErrorMessages({errorMessages,pendingMessage}:tProvideErrorMessagesParams) : Provider{
  return {
    provide: ERROR_MESSAGES,
    useFactory: () => {

      const defaultErrorMessages = inject(DEFAULT_ERROR_MESSAGES);

      const mergedErrorMessages = {
        ...defaultErrorMessages.errorMessages,
        ...errorMessages
      };

      const mergedPedingMessage = pendingMessage || defaultErrorMessages.pendingMessage;

      return {
        errorMessages:mergedErrorMessages,
        pendingMessage: mergedPedingMessage
      }

    }
  }
}
