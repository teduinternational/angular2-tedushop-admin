import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoleService {

  constructor(private _dataService: DataService) { }

  getAllPaging(pageIndex: number, pageSize: number, filter: string): Observable<any> {
    this._dataService.setAuthenHeader();
    return this._dataService.get('/api/appRole/getlistpaging?page=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter);
  }

}
