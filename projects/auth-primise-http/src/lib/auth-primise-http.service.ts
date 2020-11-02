import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

import { JwtResponseI } from "./models/jwt-response";
import { UserI } from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthPrimiseHttpService {

  private readonly jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  public login(user: UserI, url: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post<JwtResponseI>(url, {
      username: user.username,
      password: user.password,
      method: 'POST',
      headers: headers
    }).pipe(tap(this.setSession.bind(this)))
      .toPromise()
  }

  private setSession(jwtResponse: JwtResponseI) {
    localStorage.setItem('accessToken', jwtResponse.token);
    localStorage.setItem('username', jwtResponse.details.username);
    const roles = jwtResponse.details.authorities.join(',');
    localStorage.setItem('roles', roles);
  }

  public logout(url: string): Promise<any> {
    return this.http.get(url).toPromise()
      .then(response => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        localStorage.removeItem('roles');
        localStorage.clear();
      })
      .catch(err => {
        console.error("No se podra cerrar la sesion");
      });
  }

  /**
   * @returns True if the user is logged in, false otherwise.
   */
  public isLogged(): boolean {
    const getToken = localStorage.getItem('accessToken');
    if (getToken === null) return false;

    return (
      !this.jwtHelper.isTokenExpired(getToken) ||
      this.jwtHelper.getTokenExpirationDate(getToken) === null
    )
  }

}
