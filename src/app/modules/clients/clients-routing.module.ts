import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListClientComponent} from "./pages/list-client/list-client.component";
import {CreateClientComponent} from "./pages/create-client/create-client.component";

const routes: Routes = [
  { path: 'list-clients', data: { breadcrumb: 'Lista de clients' }, component: ListClientComponent },
  { path: 'form-client', data: {breadcrumb: 'Formulario de cliente'}, component: CreateClientComponent },
  { path: 'update-client/:id', data: {breadcrumb: 'Editar client'},  component: CreateClientComponent , pathMatch: 'full' },
  { path: '', redirectTo: 'list-clients', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
