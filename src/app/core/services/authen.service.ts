import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { SystemConstants } from '../../core/common/system.constants';
import { LoggedInUser } from '../domain/loggedin-user';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenService {

  constructor(private _http: Http) {

  }

  login(username: string, password: string) {
    let body = "userName=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password) +
      "&grant_type=password";
    let headers = new Headers();
    // headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post(SystemConstants.BASE_API + "/api/oauth/token", body, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user: LoggedInUser = response.json();
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.removeItem(SystemConstants.CURRENT_USER);
          localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));

        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }

  isUserAuthenticated(): boolean {
    var _user: any = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (_user != null)
      return true;
    else
      return false;
  }
  checkAccess(functionId: string) {
    var user = this.getLoggedInUser();
    var result: boolean = false;
    var permission: any[] = JSON.parse(user.permissions);
    var roles: any[] = JSON.parse(user.roles);
    var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanRead == true);
    if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1) {
      return true;
    }
    else
      return false;
  }
  hasPermission(functionId: string, action: string): boolean {
    var user = this.getLoggedInUser();
    var result: boolean = false;
    var permission: any[] = JSON.parse(user.permissions);
    var roles: any[] = JSON.parse(user.roles);
    switch (action) {
      case 'create':
        var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanCreate == true);
        if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
          result = true;
        break;
      case 'update':
        var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanUpdate == true);
        if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
          result = true;
        break;
      case 'delete':
        var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanDelete == true);
        if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
          result = true;
        break;
    }
    return result;
  }
  getLoggedInUser(): LoggedInUser {
    var _user: LoggedInUser;

    if (this.isUserAuthenticated()) {
      var _userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      _user = new LoggedInUser(
        _userData.access_token,
        _userData.username,
        _userData.fullName,
        _userData.email,
        _userData.avatar,
        _userData.permissions, _userData.roles);
    }
    else {
      _user = null;
    }

    return _user;
  }
}
