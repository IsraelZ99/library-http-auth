import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from 'http-authentication-zn';
import { CanActivateGuard } from "auth-primise-http";
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PromLoginComponent } from './promise/prom-login/prom-login.component';
import { PromLogoutComponent } from './promise/prom-logout/prom-logout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'promise/login', component: PromLoginComponent },
  { path: 'promise/logout', component: PromLogoutComponent, canActivate: [CanActivateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
