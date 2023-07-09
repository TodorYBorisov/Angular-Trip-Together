import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent
  ]

})
export class AuthModule { }
