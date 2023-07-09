import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ProfileComponent]
  
})
export class AuthModule { }
