import { inject, InjectionToken } from "@angular/core";
import { TErrorMessages } from "../types/error-messages.types";
import { DEFAULT_ERROR_MESSAGES } from "./default-error-messages.component";

export const ERROR_MESSAGES = new InjectionToken<TErrorMessages>('ERROR_MESSAGES',{
  providedIn:'root',
  factory() {
    return inject(DEFAULT_ERROR_MESSAGES)
  }
});
