import { Component, OnInit } from '@angular/core';
import { } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpAuthenticationZnService } from "http-authentication-zn";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpAuth: HttpAuthenticationZnService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form) {
    const urlApi = 'http://155.138.216.49:8080/ollin-server/api/auth/token';
    this.httpAuth.login(form.value, urlApi).subscribe(data => {
      this.router.navigateByUrl('/logout');
    });
  }

}
