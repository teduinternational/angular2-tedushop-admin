import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenService } from './authen.service';
import { SystemConstants } from './../common/system.constants';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
    private headers: Headers;
    constructor(public http: Http, private route: Router, public authenService: AuthenService) {
        this.headers = new Headers();
    }
    setAuthenHeader() {
        this.headers.append("Authorization", "Bearer " + this.authenService.getLoggedInUser().access_token);
    }

    get(uri: string) {
        return this.http.get(SystemConstants.BASE_API + uri, { headers: this.headers })
            .map((response: Response) => response.json());

    }

    post(uri: string, data?: any) {
        return this.http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers });
    }
    put(uri: string, data?: any) {
        return this.http.put(SystemConstants.BASE_API + uri, data, { headers: this.headers });
    }

    delete(uri: string, id: any) {
        return this.http.delete(SystemConstants.BASE_API + uri + '/' + id, { headers: this.headers })
            .map(response => <any>(<Response>response).json())
    }

    deleteResource(resource: string) {
        return this.http.delete(resource, { headers: this.headers })
            .map(response => <any>(<Response>response).json())
    }
}