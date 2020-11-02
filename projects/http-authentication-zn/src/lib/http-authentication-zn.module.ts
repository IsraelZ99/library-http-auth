import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpAuthenticationZnComponent } from './http-authentication-zn.component';
import { HttpAuthenticationZnService } from './http-authentication-zn.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { CanActivateViaAuthGuard } from './guards/authorizated.guard';

@NgModule({
  declarations: [HttpAuthenticationZnComponent],
  imports: [
    HttpClientModule
  ], providers: [
    HttpAuthenticationZnService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    CanActivateViaAuthGuard
  ],
  exports: [HttpAuthenticationZnComponent, HttpClientModule]
})
export class HttpAuthenticationZnModule { }
