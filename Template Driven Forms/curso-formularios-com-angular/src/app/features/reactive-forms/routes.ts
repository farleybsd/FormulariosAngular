import { Routes } from '@angular/router';
import { FormControlComponent } from './1.form-control/form-control.component';
import { ValidationsComponent } from './2.validations/validations/validations.component';
import { UsingMarkFuncionsComponent } from './3.using-mark-funcions/using-mark-funcions.component';

export const reactiveFormsRoutes: Routes = [
  {
    path: 'form-control',
    component: FormControlComponent,
  },
  {
    path: 'validations',
    component: ValidationsComponent
  },
   {
    path: 'using-mark-funcions',
    component: UsingMarkFuncionsComponent
  },
];
