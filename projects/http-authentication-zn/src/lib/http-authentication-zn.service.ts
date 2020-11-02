import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

import { JwtResponseI } from "./models/jwt-response";
import { UserI } from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class HttpAuthenticationZnService {

  constructor(private http: HttpClient) { }

  public login(user: UserI, url: string): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(url, {
      username: user.username,
      password: user.password
    }).pipe(tap(this.setSession.bind(this)));
  }

  private setSession(jwtResponse: JwtResponseI) {
    localStorage.setItem('accessToken', jwtResponse.token);
    localStorage.setItem('username', jwtResponse.details.username);
    const roles = jwtResponse.details.authorities.join(',');
    localStorage.setItem('roles', roles);
  }

  public logout(url: string): boolean {
    this.http.get(url).subscribe(res => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('username');
      localStorage.removeItem('roles');
      localStorage.clear();
    });
    return true;
  }

  public isLogged(): boolean {
    const getToken = localStorage.getItem('accessToken');
    return (getToken === null) ? (false) : (true);
  }


}
