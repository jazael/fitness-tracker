import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {

    private user: User;
    authChangue = new Subject<boolean>();

    constructor(private router: Router) {}

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };

        this.authSuccessfully();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };

        this.authSuccessfully();
    }

    logout() {
        this.user = null;
        this.authChangue.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return {...this.user};
    }

    isAuth() {
        return this.user != null;
    }

    private authSuccessfully() {
        this.authChangue.next(true);
        this.router.navigate(['/training']);
    }

}
