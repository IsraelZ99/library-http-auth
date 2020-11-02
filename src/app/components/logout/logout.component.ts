import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpAuthenticationZnService } from "http-authentication-zn";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private httpAuth: HttpAuthenticationZnService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    const url: string = 'http://155.138.216.49:8080/ollin-server/api/auth/logout';
    if (this.httpAuth.logout(url)) {
      this.router.navigateByUrl('/');
    }
  }

}
