import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import {CreateClientComponent} from "./pages/create-client/create-client.component";
import {ListClientComponent} from "./pages/list-client/list-client.component";
import {ButtonDirective} from "primeng/button";
import {MessagesModule} from "primeng/messages";
import {PrimeTemplate} from "primeng/api";
import {Ripple} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateClientComponent,
    ListClientComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ButtonDirective,
    MessagesModule,
    PrimeTemplate,
    Ripple,
    TableModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
