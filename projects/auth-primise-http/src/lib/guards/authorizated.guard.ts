import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthPrimiseHttpService } from '../auth-primise-http.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private httpService: AuthPrimiseHttpService, private router: Router) { }

    canActivate() {
        if (!this.httpService.isLogged()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}