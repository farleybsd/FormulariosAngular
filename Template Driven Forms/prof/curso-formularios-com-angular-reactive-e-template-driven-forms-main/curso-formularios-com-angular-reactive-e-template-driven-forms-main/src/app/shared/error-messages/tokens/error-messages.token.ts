import { inject, InjectionToken } from '@angular/core';
import { tErrorMessages } from '../types/error-messages.type';
import { DEFAULT_ERROR_MESSAGES } from './default-error-messages.token';

export const ERROR_MESSAGES = new InjectionToken<tErrorMessages>('ERROR_MESSAGES', {
  providedIn: 'root',
  factory() {
    return inject(DEFAULT_ERROR_MESSAGES);
  },
});
