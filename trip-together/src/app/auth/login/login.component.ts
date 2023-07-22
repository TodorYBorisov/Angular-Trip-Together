import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    console.log(email);
    console.log(password);

    //form.resetForm();

    this.authService.login(email!, password!).subscribe((user) => {
      this.router.navigate(['/'])
    });

    // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    // this.router.navigate([returnUrl])
  }

}