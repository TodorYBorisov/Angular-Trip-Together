import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  //проверяваме дали имаме логнат потребител
  get isLogged(): boolean {
    return !!this.user; //когато сложим два удиеителни поред променливата ако я има ще върне true, ако ли не , false
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {

    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }
  
  login(email: string, password: string) {
    return this.http.post<User>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(username: string, email: string, tel: string, gender: string, password: string, rePassword: string) {
    return this.http.post<User>('/api/register', { username, email, tel, gender, password, rePassword })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http.post<User>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http.get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(username: string, email: string, tel: string) {
    return this.http.put<User>('/api/users/profile', { username, email, tel })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}