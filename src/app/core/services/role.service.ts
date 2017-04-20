import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { AppRole } from './../domain/app.role';
@Injectable()
export class RoleService {

  constructor(private _dataService: DataService) {
    this._dataService.setAuthenHeader();

  }
  add(role: any): Observable<any> {
    return this._dataService.post('/api/appRole/add', JSON.stringify(role));

  }
  update(role: any): Observable<any> {
    return this._dataService.put('/api/appRole/update', JSON.stringify(role));

  }
  delete(id: string): Observable<any> {
    return this._dataService.delete('/api/appRole/delete','id', id);
  }

  getOne(id: string): Observable<AppRole> {
    return this._dataService.get('/api/appRole/detail' + id);
  }
  getAllPaging(pageIndex: number, pageSize: number, filter: string): Observable<AppRole[]> {
    return this._dataService.get('/api/appRole/getlistpaging?page=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter);
  }

}
