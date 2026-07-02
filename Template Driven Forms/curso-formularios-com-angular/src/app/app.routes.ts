import { Routes } from '@angular/router';
import { routes as templatesDrivenFormsRoutes } from './features/template-driven-forms/routes';
import { reactiveFormsRoutes } from './features/reactive-forms/routes';
export const routes: Routes = [
  {
    path: 'template-driven-forms',
    children: templatesDrivenFormsRoutes
  },
  {
    path: 'reactive-forms',
    children: reactiveFormsRoutes
  }
];
