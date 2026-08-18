import { InjectionToken } from '@angular/core';
import { errorMessages, pendingMessage } from '../data/messages.data';
import { tErrorMessages } from '../types/error-messages.type';

export const DEFAULT_ERROR_MESSAGES = new InjectionToken<tErrorMessages>('DEFAULT_ERROR_MESSAGES', {
  providedIn: 'root',
  factory() {
    return {
      errorMessages,
      pendingMessage
    }
  },
});
