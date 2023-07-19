import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    } 

    const value: { email: string, password: string } = form.value;

    console.log(value.email);
    console.log(value.password);

    //зачистване на полетата на формата
    //form.setValue({ email: '', password: '' })
    form.resetForm();

    //за сега не оперираме с данните за логването
    this.authService.login();
    this.router.navigate(['/'])
  }

}