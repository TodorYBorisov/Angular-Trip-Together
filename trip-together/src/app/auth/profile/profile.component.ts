import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/interfaces/user';
import { TripService } from 'src/app/features/trip.service';
import { Trip } from 'src/app/shared/interfaces/trip';

interface Profile { //тук си правим един интерфей на обекта
  username: string,
  email: string,
  tel: string
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User | undefined;
  tripsFound: Trip[] = [];
  

  isEditMode: boolean = false;
  ifTrips: boolean = false

  //правим си един профил детаилс
  profileDetails: Profile = {
    username: '',
    email: '',
    tel: '',
  };

  form = this.formBuilder.group({ //правим форма група с валидациите
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', [Validators.required]]

  })

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tripService: TripService) { }

  ngOnInit(): void {

    if (this.authService.user) {
      const { username, email, tel } = this.authService.user;
      this.profileDetails = { username, email, tel };

      this.form.setValue({
        username,
        email,
        tel,
      });
    }

    //const { username, email, tel } = this.authService.user! //!така гарантираме, че ще имаме потребител
    this.geAlltUserTrips();
  }
  

  get gender(): string {
    return this.authService.user?.gender || '';

  }

get userId():any{
  return this.authService.user?._id
}


  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) { return };

    //задаваме си променлива да е равна на данните ор формата и те да са от типа на профила
    this.profileDetails = { ...this.form.value } as Profile;

   
    const { username, email, tel } = this.profileDetails;
    this.authService.updateProfile(username, email, tel).subscribe(() => {

      this.toggleEditMode()
    })

  }

  geAlltUserTrips():void {
    this.tripService.getUserTrips(this.userId).subscribe((trips: Trip[]) => {
      this.tripsFound = trips;
      console.log(this.tripsFound);
    },
    );
  }
}