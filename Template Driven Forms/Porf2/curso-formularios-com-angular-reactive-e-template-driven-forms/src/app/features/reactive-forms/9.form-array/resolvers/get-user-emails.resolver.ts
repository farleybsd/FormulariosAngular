import { ResolveFn } from '@angular/router';
import { UserEmailsService } from '../services/user-emails.service';
import { inject } from '@angular/core';
import { UserEmails } from '../interfaces/user-emails';

export const getUserEmailsResolver: ResolveFn<UserEmails> = (route, state) => {
  const userEmailsService = inject(UserEmailsService);

  return userEmailsService.get();
};
