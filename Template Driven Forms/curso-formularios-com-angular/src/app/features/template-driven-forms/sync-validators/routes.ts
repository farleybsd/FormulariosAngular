import { Routes } from "@angular/router";
import { SyncValidatorsComponent } from "./sync-validators.component";
import { AsyncValidatorsComponent } from "../async-validators/async-validators.component";

export const routes:Routes = [
  {
    path: 'sync-validators',
    component: SyncValidatorsComponent
  },
  {
    path: 'async-validators',
    component: AsyncValidatorsComponent
  }
]
