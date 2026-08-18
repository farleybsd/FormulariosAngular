import { Injectable } from '@angular/core';

interface SessionData {
  step: number;
  formData: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class SessionManagerService {
  private key = 'stepper-session';

  setSession(sessionPayload: SessionData) {
    localStorage.setItem(this.key, JSON.stringify(sessionPayload));
  }

  getSession() {
    const value = localStorage.getItem(this.key);

    if (value) {
      return JSON.parse(value) as SessionData;
    }

    return null;
  }
}
