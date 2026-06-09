import { Routes } from '@angular/router';
import { routes as templateDrivenFormsRoutes } from './features/template-driven-forms/routes';
import { reactiveFormsRoutes } from './features/reactive-forms/routes';

export const routes: Routes = [
  {
    path: 'template-driven-forms',
    children: templateDrivenFormsRoutes,
  },
  {
    path: 'reactive-forms',
    children: reactiveFormsRoutes,
  },
];
