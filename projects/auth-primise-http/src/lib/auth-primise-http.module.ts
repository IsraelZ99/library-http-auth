import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthPrimiseHttpComponent } from './auth-primise-http.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { CanActivateGuard } from './guards/authorizated.guard';

import { AuthPrimiseHttpService } from "./auth-primise-http.service";

@NgModule({
  declarations: [AuthPrimiseHttpComponent],
  imports: [
    HttpClientModule
  ], providers: [
    AuthPrimiseHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    CanActivateGuard
  ],
  exports: [AuthPrimiseHttpComponent, HttpClientModule]
})
export class AuthPrimiseHttpModule { }
