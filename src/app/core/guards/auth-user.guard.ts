import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {globalApp} from "../../data/constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  token = '';
  constructor(
    private router: Router
  ) {
  }
  canActivate(): boolean {
    this.token = localStorage.getItem(globalApp.tokenKey) || '';
    if (this.token !== null && this.token !== '') {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
