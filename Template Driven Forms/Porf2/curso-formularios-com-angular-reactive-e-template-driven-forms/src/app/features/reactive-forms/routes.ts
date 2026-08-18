import { Routes } from '@angular/router';
import { FormControlComponent } from './1.form-control/form-control.component';
import { ValidationsComponent } from './2.validations/validations.component';
import { UsingMarkFunctionsComponent } from './3.using-mark-functions/using-mark-functions.component';
import { SetErrorsComponent } from './4.set-errors/set-errors.component';
import { FormGroupComponent } from './5.form-group/form-group.component';
import { ManipulateControlsComponent } from './6.manipulate-controls/manipulate-controls.component';
import { FormRecordComponent } from './7.form-record/form-record.component';
import { SubFormsComponent } from './8.sub-forms/sub-forms.component';
import { FormArrayComponent } from './9.form-array/form-array.component';
import { getUserEmailsResolver } from './9.form-array/resolvers/get-user-emails.resolver';
import { UtilityFunctionsComponent } from './10.utility-functions/utility-functions.component';
import { FormBuilderComponent } from './11.form-builder/form-builder.component';
import { ControlValueAcessorComponent } from './12.control-value-acessor/control-value-acessor.component';
import { JsonFormExampleComponent } from './13.json-form-example/json-form-example.component';
import { ControlContainer } from '@angular/forms';
import { ControlContainerComponent } from './14.control-container/control-container.component';
import { SimpleStepperComponent } from './15.steppers/simple-stepper/simple-stepper.component';
import { routes as routerStepperRoutes } from './15.steppers/router-stepper/routes';

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
    path: 'using-mark-functions',
    component: UsingMarkFunctionsComponent,
  },
  {
    path: 'set-errors',
    component: SetErrorsComponent,
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
  {
    path: 'form-array',
    component: FormArrayComponent,
    resolve: {
      userEmails: getUserEmailsResolver,
    },
  },
  {
    path: 'utility-function',
    component: UtilityFunctionsComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  {
    path: 'control-value-acessor',
    component: ControlValueAcessorComponent,
  },
  {
    path: 'json-form',
    component: JsonFormExampleComponent,
  },
  {
    path: 'control-container',
    component: ControlContainerComponent,
  },
  {
    path: 'simple-stepper',
    component: SimpleStepperComponent,
  },
   {
    path: 'router-stepper',
    children: routerStepperRoutes
  },
];
