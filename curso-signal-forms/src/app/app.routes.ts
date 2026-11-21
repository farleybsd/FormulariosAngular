import { Routes } from '@angular/router';
import { SimplesForm } from './feature/1.simple-form/simples-form.component';
import { NativeFields } from './feature/2.native-fields/native-fields.component';
import { SubForms } from './feature/3.sub-forms/sub-forms.component';
import { TranslateModel } from './feature/4.translate-model/translate-model.component';

export const routes: Routes = [
  {
    path: '1-simple-form',
    component: SimplesForm,
  },
  {
    path: '2-native-fields',
    component: NativeFields,
  },
  {
    path: '3-sub-forms',
    component: SubForms,
  },{
     path: '4-Translate-Model',
    component: TranslateModel,
  }
];
