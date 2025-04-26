import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "../layout/app.layout.component";

const routes: Routes = [
  { path: '', component: AppLayoutComponent, children: [
      {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'clients', data: { breadcrumb: 'Clientes' }, loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
