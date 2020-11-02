import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { HttpAuthenticationZnModule } from "http-authentication-zn";
import { AuthPrimiseHttpModule } from "auth-primise-http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PromLoginComponent } from './promise/prom-login/prom-login.component';
import { PromLogoutComponent } from './promise/prom-logout/prom-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    PromLoginComponent,
    PromLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpAuthenticationZnModule,
    AuthPrimiseHttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
