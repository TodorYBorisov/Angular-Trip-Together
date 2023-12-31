import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  observe$!: Subscription;
  errMessage!: string;
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.authService.login(email!, password!).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err) =>{
        this.errMessage = err.error.message
      }
    });
  }

}