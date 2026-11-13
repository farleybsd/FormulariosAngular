import { Routes } from '@angular/router';
import { SimplesForm } from './feature/1.simple-form/simples-form.component';
import { NativeFields } from './feature/2.native-fields/native-fields.component';

export const routes: Routes = [
  {
    path: '1-simple-form',
    component: SimplesForm,
  },
  {
    path: '2-native-fields',
    component: NativeFields,
  },
];
