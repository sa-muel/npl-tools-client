import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BaseUrl, EntityService } from '@core/entity.service';
import { User } from '@shared/entity/user.model';
import { auth } from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';

export interface LoginConfig {
    email: string;
    password: string;
}

export interface SignupConfig {
    email: string;
    password: string;
    displayName: string;
}

interface ResponseData {
    data: any;
    status: string;
}

@Injectable()
export class AuthenticationService {
    private _user: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(
        private entityService: EntityService,
        private tokenService: TokenService,
        private http: HttpClient,
        private router: Router,
        private fbAuth: AngularFireAuth
    ) { }

    public isAuthenticated(): boolean {
        return !!this.fbAuth.auth.currentUser;
    }

    public getUser(): Observable<User> {
        return this.fbAuth.authState
    }

    public signup(value: SignupConfig): Observable<User> {
        const { email, password, displayName } = value;

        return new Observable(observer => {
            this.fbAuth.auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential: auth.UserCredential) => {
                    userCredential.user.updateProfile({ displayName })
                        .then(() => {
                            observer.next();
                            observer.complete();
                        });
                })
                .catch(() => {
                    observer.error();
                    observer.complete();
                });

        });
        // return this.entityService.create<User>(data);
    }

    public authenticate(config: LoginConfig): Observable<any> {
        // const options = { headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8') };

        return new Observable(observer => {
            this.fbAuth.auth.signInWithEmailAndPassword(config.email, config.password)
                .then((auth) => {
                    observer.next();
                    observer.complete();
                })
                .catch((e) => {
                    observer.error(e);
                    observer.complete();
                });
        });
    }

    public refreshUser(): void {
        const token = this.tokenService.getValue();

        if (!token.isAuthenticated) {
            return;
        }

        this.http.get<ResponseData>(BaseUrl + 'auth')
            .subscribe(
                response => {
                    this._user.next(response.data);
                },
                error => {
                    this.tokenService.set('');
                }
            );
    }

    public logout(): void {
        this.fbAuth.auth.signOut();
        this.router.navigate(['login']);
    }

    public resetPassword(key: string, password: string): Observable<ResponseData> {
        return this.http.post<ResponseData>(BaseUrl + 'users:reset-password', { key, password });
    }

    public checkResetPasswordToken(key: string): Observable<boolean> {
        return this.http.post<any>(BaseUrl + 'users:verify-password-reset', { key });
    }

    public recoverPassword(options: { email: string }): Observable<ResponseData> {
        return new Observable(observer => {

            this.fbAuth.auth.sendPasswordResetEmail(options.email)
                .then(() => {
                    observer.next();
                    observer.complete();
                })
                .catch((e) => {
                    observer.error(e);
                    observer.complete();
                });
        });
    }

    public acceptEmailConfirmation(key: string): Observable<ResponseData> {
        return this.http.post<ResponseData>(BaseUrl + 'users:confirm-email', { key });
    }
}
