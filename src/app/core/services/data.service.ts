import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenService } from './authen.service';
import { SystemConstants } from './../common/system.constants';
import { MessageContstants } from './../common/message.constants';
import { UtilityService } from './utility.service';
import { ReplaySubject } from 'rxjs';

import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
@Injectable()
export class DataService {
    private headers: Headers;
    public activeProject: ReplaySubject<any> = new ReplaySubject(1);

    constructor(public http: Http, private route: Router,
        public authenService: AuthenService,
        private notificationService: NotificationService, private utilityService: UtilityService) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }
    setAuthenHeader() {
        console.log(this.authenService.getLoggedInUser().access_token)
        this.headers.append("Authorization", "Bearer " + this.authenService.getLoggedInUser().access_token);
    }

    get(uri: string) {
        return this.http.get(SystemConstants.BASE_API + uri, { headers: this.headers })
            .map(this.extractData);

    }

    post(uri: string, data?: any) {
        return this.http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers })
            .map(this.extractData);
    }
    put(uri: string, data?: any) {
        return this.http.put(SystemConstants.BASE_API + uri, data, { headers: this.headers })
            .map(this.extractData);
    }

    delete(uri: string, key: string, id: string) {
        return this.http.delete(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, { headers: this.headers })
            .map(this.extractData);

    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    public handleError(error: any) {
        if (error.status == 401) {
            this.notificationService.printErrorMessage(MessageContstants.LOGIN_AGAIN_MSG);
            this.utilityService.navigateToLogin();
        }
        else {
            let errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Lỗi hệ thống';
            this.notificationService.printErrorMessage(errMsg);

            return Observable.throw(errMsg);
        }

    }
}