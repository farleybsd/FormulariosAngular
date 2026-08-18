import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

type tUserPreferences = Record<string, boolean>;

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  private httpClient = inject(HttpClient);

  getPreferences() {
    return this.httpClient.get<tUserPreferences>('http://localhost:3000/user-preferences');
  }

  updatePreferences(preferencesPayload: tUserPreferences) {
    return this.httpClient.put<tUserPreferences>(
      'http://localhost:3000/user-preferences',
      preferencesPayload,
    );
  }
}
