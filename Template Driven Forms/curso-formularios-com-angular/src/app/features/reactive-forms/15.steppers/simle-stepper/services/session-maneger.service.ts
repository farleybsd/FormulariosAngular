import { Injectable } from '@angular/core';

interface SessionData{
  step: number;
  formData: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class SessionManegerService {
  private sessionKey = 'Stepper-Session';

  setSession(payload: SessionData): void {
    localStorage.setItem(this.sessionKey, JSON.stringify(payload));
  }

  getSession(): SessionData | null {
    const value = localStorage.getItem(this.sessionKey);
    if (value) {
      return JSON.parse(value) as SessionData;
    }
    return null;
  }

  clearSession(): void {
    localStorage.removeItem(this.sessionKey);
  }
}
