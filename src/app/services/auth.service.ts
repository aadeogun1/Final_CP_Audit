import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor(public jwtHelper: JwtHelperService) {}
  constructor() {}

  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('access_token');
    return token;
    // Check whether the token is expired and return
    //true or false
    // return !this.jwtHelper.isTokenExpired(token);
  }
}
