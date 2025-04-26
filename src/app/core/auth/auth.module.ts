import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./pages/login/login.component";
import {AppConfigModule} from "../../layout/config/config.module";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ReactiveFormsModule} from "@angular/forms";
import {MessagesModule} from "primeng/messages";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppConfigModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    RippleModule,
    ReactiveFormsModule,
    MessagesModule,
  ]
})
export class AuthModule { }
