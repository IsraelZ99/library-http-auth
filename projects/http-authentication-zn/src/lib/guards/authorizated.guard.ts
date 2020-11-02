import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { HttpAuthenticationZnService } from '../http-authentication-zn.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private httpService: HttpAuthenticationZnService, private router: Router) { }

    canActivate() {
        if (!this.httpService.isLogged()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}