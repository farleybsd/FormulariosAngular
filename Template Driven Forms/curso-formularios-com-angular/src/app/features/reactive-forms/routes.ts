import { Routes } from '@angular/router';
import { FormControlComponent } from './1.form-control/form-control.component';
import { ValidationsComponent } from './2.validations/validations/validations.component';
import { UsingMarkFuncionsComponent } from './3.using-mark-funcions/using-mark-funcions.component';
import { SetErrosComponent } from './4.set-erros/set-erros.component';
import { FormGroupComponent } from './5.form-group/form-group.component';
import { ManipulateControlsComponent } from './6.manipulate-controls/manipulate-controls.component';
import { FormRecordComponent } from './7.form-record/form-record.component';
import { SubFormsComponent } from './8.sub-forms/sub-forms.component';


export const reactiveFormsRoutes: Routes = [
  {
    path: 'form-control',
    component: FormControlComponent,
  },
  {
    path: 'validations',
    component: ValidationsComponent,
  },
  {
    path: 'using-mark-funcions',
    component: UsingMarkFuncionsComponent,
  },
  {
    path: 'set-erros',
    component: SetErrosComponent,
  },
  {
    path: 'form-group',
    component: FormGroupComponent,
  },
  {
    path: 'manipulate-controls',
    component: ManipulateControlsComponent,
  },
  {
    path: 'form-record',
    component: FormRecordComponent,
  },
  {
    path: 'sub-forms',
    component: SubFormsComponent,
  },
];
