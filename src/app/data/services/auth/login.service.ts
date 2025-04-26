import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {globalApp} from "../../constants/global.variable.constant";
import {LoginRequestInterface} from "../../interfaces/auth/login-request.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data: LoginRequestInterface) {
    return this.http.post(`${globalApp.apiUrl}/auth/login.php`, data);
  }
}
