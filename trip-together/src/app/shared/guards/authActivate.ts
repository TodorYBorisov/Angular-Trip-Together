import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthActivate implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        return this.checkIfLogged(state.url) || this.router.createUrlTree(['/about']); //'/auth/login'
    }

    checkIfLogged(url: string): boolean {
        return false;
    };
}
