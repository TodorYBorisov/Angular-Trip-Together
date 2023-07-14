import { Injectable } from '@angular/core';
import { User } from '../shared/types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user: User | undefined;
  USER_KEY = '[user]' // това е ключа с който записваме потребителя в LocalStoriga

  //с това проверяваме дали има потребител в localStorige
  get isLogged(): boolean {
    return !!this.user //когато сложим два удиеителни поред променливата ако я има ще върне true, ако ли не , false
  }

  constructor() {
    try {
      const localStorigeUser = localStorage.getItem(this.USER_KEY) || "";

      this.user = JSON.parse(localStorigeUser);


    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'toshko@abv.bg',
      userName: 'Toshko'
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))

  }

  logout(): void {
    this.user = undefined
    localStorage.removeItem(this.USER_KEY)
  }
}
