import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { User } from '@shared/entity/user.model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { filter, take } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserResolver implements Resolve<Observable<User>> {
    constructor(
        private authService: AuthenticationService,
    ) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.authService.getUser().pipe(
            filter(u => !!u),
            take(1)
        );
    }
}
