import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NonAuthActivated implements CanActivate, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  constructor(private authService: AuthService , private router:Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>((resolve) => {
      this.authService.user$.pipe(
        map((user) => {
          const hasUser = !!user?._id;

          if (!hasUser) {
            resolve(true);
          } else {
            resolve(this.router.navigate(['/home']));
          }
        })
      ).subscribe({
        next:()=>{},
        error:(error)=>{
          console.log(`Error: ${error}`);
        }
      });
    })
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}