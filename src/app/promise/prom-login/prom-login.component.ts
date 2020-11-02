import { Component, OnInit } from '@angular/core';
import { } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthPrimiseHttpService } from "auth-primise-http";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prom-login',
  templateUrl: './prom-login.component.html',
  styleUrls: ['./prom-login.component.scss']
})
export class PromLoginComponent implements OnInit {

  public userjson;

  constructor(private authService: AuthPrimiseHttpService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onLogin(form) {
    const urlAPi: string = 'http://155.138.216.49:8080/ollin-server/api/auth/token';
    this.authService.login(form.value, urlAPi).then(good => {
      this.http.get('http://155.138.216.49:8080/ollin-server/api/metar').subscribe(console.log)
      this.router.navigateByUrl('/promise/logout');
    }).catch(err => {
      this.router.navigateByUrl('/promise/login');
    })
  }

}
