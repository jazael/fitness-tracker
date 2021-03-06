import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private inj: Injector) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const authServ = this.inj.get(AuthService);
        if (authServ.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }

    canLoad(route: Route) {
        const authServ = this.inj.get(AuthService);
        if (authServ.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
