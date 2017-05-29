import { Component, OnInit, ViewChild } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { AppRole } from '../../core/domain/app.role';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { AuthenService } from '../../core/services/authen.service';

import { MessageContstants } from '../../core/common/message.constants';
import { UploadService } from '../../core/services/upload.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Router } from '@angular/router';
declare var moment: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  @ViewChild("avatar") avatar;
  public myRoles: string[] = [];
  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string;
  public entity: AppUser;
  public users: AppUser[];
  public allRoles: IMultiSelectOption[] = [];
  public roles: AppRole[];
  public dateOptions: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };
  constructor(
    private _dataService: DataService,
    private notificationService: NotificationService,
    private _authenService: AuthenService,
    private utilityService: UtilityService,
    private uploadService: UploadService) {
    if (_authenService.checkAccess('USER') == false) {
      utilityService.navigateToLogin();
    }
  }
  //Show add form
  public showAdd() {
    this.entity = new AppUser();
    this.addEditModal.show();
  }
  //Show edit form
  public showEdit(id: string) {
    this._dataService.get('/api/appUser/detail/' + id).subscribe((response: any) => {
      this.entity = response;
      this.myRoles = [];
      for (let role of response.Roles) {
        this.myRoles.push(role);
      }
      this.entity.BirthDay = moment(new Date(response.BirthDay)).format('DD/MM/YYYY');
      this.addEditModal.show();
    }, error => this._dataService.handleError(error));
  }
  ngOnInit() {
    this.loadRoles();
    this.search();
  }
  public search() {
    this._dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter).subscribe((response: any) => {
      this.users = response.Items;
      this.pageIndex = response.PageIndex;
    }, error => this._dataService.handleError(error));
  }
  public delete(id: string) {
    this.notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => {
      this._dataService.delete('/api/appUser/delete', 'id', id).subscribe((response: any) => {
        this.notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
        this.search();
      }, error => this._dataService.handleError(error));
    });
  }

  private loadRoles() {
    this._dataService.get('/api/appRole/getlistall').subscribe((response: any[]) => {
      this.allRoles = [];
      for (let role of response) {
        this.allRoles.push({ id: role.Name, name: role.Description });
      }
    }, error => this._dataService.handleError(error));
  }
  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      this.entity.Roles = this.myRoles;
      let fi = this.avatar.nativeElement;
      if (fi.files.length > 0) {
        this.uploadService.postWithFile('/api/upload/saveImage?type=avatar', null, fi.files).then((imageUrl: string) => {
          this.entity.Avatar = imageUrl;
        }).then(() => {
          this.saveData();
        });
      }
      else {
        this.saveData();
      }
    }
  }
  private saveData() {
    if (this.entity.Id == undefined) {
      this._dataService.post('/api/appUser/add', JSON.stringify(this.entity)).subscribe((response: any) => {
        this.search();
        this.addEditModal.hide();
        this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
      });
    }
    else {
      this._dataService.put('/api/appUser/update', JSON.stringify(this.entity)).subscribe((response: any) => {
        this.search();
        this.addEditModal.hide();
        this.notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
      }, error => this._dataService.handleError(error));
    }
  }
  public pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.search();
  }
  public selectGender(event) {
    this.entity.Gender = event.target.value
  }

  public selectedDate(value: any) {
    console.log(value);
    this.entity.BirthDay = moment(new Date(value.end._d)).format('DD/MM/YYYY');
  }
}
