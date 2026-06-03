import { Routes } from '@angular/router';
import { routes as templatesDrivenFormsRoutes } from './features/template-driven-forms/sync-validators/routes';
export const routes: Routes = [
  {
    path: 'template-driven-forms',
    children: templatesDrivenFormsRoutes
  }
];
