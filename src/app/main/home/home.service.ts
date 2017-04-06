import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private httpService: Http) { }

  getEmployees(): Observable<any[]> {
    return this.httpService.get('/api/employees').map((response: Response) => response.json());
  }
}
