import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideErrorMessages } from './shared/error-messages/provide-functions/provide-error-messages.provide';
import { required } from '@angular/forms/signals';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideErrorMessages({
      errorMessages: {
        required: () => 'required [custom message]',
      },
      pendingMessage: 'calma calabreso...',
    }),
  ],
};
