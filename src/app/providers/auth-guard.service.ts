import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  token = window.localStorage.getItem('token');

  constructor(private _router: Router, private _authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    )
    : Observable<boolean> | Promise<boolean> | boolean {

      return new Promise(( resolve , reject ) => {
        if (this.token) {
          resolve(true);
        } else {
          reject();
          this._router.navigate(['/login']);
        }
      });
  }

}
