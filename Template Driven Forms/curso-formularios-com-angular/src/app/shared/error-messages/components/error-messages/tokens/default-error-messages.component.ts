import { InjectionToken } from "@angular/core";
import { errorMessages, pendingMessage } from "../data/messages.data";
import { TErrorMessages } from "../types/error-messages.types";

export const DEFAULT_ERROR_MESSAGES = new InjectionToken<TErrorMessages>('DEFAULT_ERROR_MESSAGES',{
  providedIn:'root',
  factory(){
    return {
      errorMessages,
      pendingMessage
    }
  }
});
