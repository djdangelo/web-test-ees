import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";

export const routes: Routes = [
  { path: 'app', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];
