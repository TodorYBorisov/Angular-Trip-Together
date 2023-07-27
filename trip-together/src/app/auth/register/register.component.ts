import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    passGroup: this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]],
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    })

  })

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler() {
    if (this.form.invalid) { return; }

    const { username, email, tel, gender, passGroup: { password, rePassword } = {} } = this.form.value;

    this.authService.register(username!, email!, tel!, gender!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
