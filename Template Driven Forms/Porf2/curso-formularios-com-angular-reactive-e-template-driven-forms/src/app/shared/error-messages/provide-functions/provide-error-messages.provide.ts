import { inject, Provider } from '@angular/core';
import { tErrorMessages } from '../types/error-messages.type';
import { ERROR_MESSAGES } from '../tokens/error-messages.token';
import { DEFAULT_ERROR_MESSAGES } from '../tokens/default-error-messages.token';

type tProvideErrorMessagesParams = Omit<tErrorMessages, 'pendingMessage'> & {
  pendingMessage?: string;
};

export function provideErrorMessages({
  errorMessages,
  pendingMessage,
}: tProvideErrorMessagesParams): Provider {
  return {
    provide: ERROR_MESSAGES,
    useFactory: () => {
      const defaultErrorMessages = inject(DEFAULT_ERROR_MESSAGES);

      const mergedErrorMessages = {
        ...defaultErrorMessages.errorMessages,
        ...errorMessages,
      };

      const mergedPendingMessage = pendingMessage || defaultErrorMessages.pendingMessage;

      return {
        errorMessages: mergedErrorMessages,
        pendingMessage: mergedPendingMessage,
      };
    },
  };
}
