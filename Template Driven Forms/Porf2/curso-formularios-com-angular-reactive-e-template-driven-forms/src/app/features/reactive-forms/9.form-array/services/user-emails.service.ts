import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserEmails } from '../interfaces/user-emails';

@Injectable({
  providedIn: 'root',
})
export class UserEmailsService {
  private httpClient = inject(HttpClient);

  get() {
    return this.httpClient.get<UserEmails>('http://localhost:3000/user-emails');
  }

  update(payload: UserEmails) {
    return this.httpClient.put<UserEmails>('http://localhost:3000/user-emails', payload);
  }
}
