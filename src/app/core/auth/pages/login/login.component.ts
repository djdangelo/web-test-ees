import { Component } from '@angular/core';
import {globalApp} from "../../../../data/constants/global.variable.constant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {LayoutService} from "../../../../layout/service/app.layout.service";
import {LoginService} from "../../../../data/services/auth/login.service";
import {Router} from "@angular/router";
import {LoginRequestInterface} from "../../../../data/interfaces/auth/login-request.interface";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  appName = globalApp.nameApp;
  formAuth!: FormGroup;
  btnLoginDisabled = false;
  messages!: Message[];

  constructor(private layoutService: LayoutService,
              private loginService: LoginService,
              private router: Router,
              private formBuilder: FormBuilder,) {
    this.formAuth = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]],
    });
  }
  get filledInput(): boolean {
    return this.layoutService.config().inputStyle === 'filled';
  }
  login(data: LoginRequestInterface): void {
    this.loginService.login(data).subscribe(
      (res: any) => {
        this.formAuth.reset();
        this.router.navigate(['app']);
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: 'Error server' },
        ]
      }
    );
  }
}
