import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SystemConstants } from '../../core/common/system.constants';
import { UrlConstants } from '../../core/common/url.constants';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem(SystemConstants.CURRENT_USER)) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate([UrlConstants.LOGIN], { queryParams: { returnUrl: state.url } });
        return false;
    }
}