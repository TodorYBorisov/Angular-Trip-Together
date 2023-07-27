import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})

export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.authService.isLogged
  }

  get username(): string {
    return this.authService.user?.username || '';

  }
  get user(){
    return this.authService.user
  }

}
