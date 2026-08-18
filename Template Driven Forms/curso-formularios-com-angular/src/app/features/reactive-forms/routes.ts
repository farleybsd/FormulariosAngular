import { Routes } from '@angular/router';
import { FormControlComponent } from './1.form-control/form-control.component';
import { ValidationsComponent } from './2.validations/validations/validations.component';

export const reactiveFormsRoutes: Routes = [
  {
    path: 'form-control',
    component: FormControlComponent,
  },
  {
    path: 'validations',
    component: ValidationsComponent
  },
];
