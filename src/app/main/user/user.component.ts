import { Component, OnInit, ViewChild } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { AppRole } from '../../core/domain/app.role';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { UploadService } from '../../core/services/upload.service';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  @ViewChild("avatar") avatar;

  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string;
  public entity: AppUser;
  public users: AppUser[];
  public roles: AppRole[];
  public dateOptions: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };
  constructor(
    private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService, private uploadService: UploadService) {
  }
  //Show add form
  public showAdd() {
    this.entity = new AppUser();
    this.addEditModal.show();
  }
  //Show edit form
  public showEdit(id: string) {
    this.entity =  this.users.find(x => x.Id == id); 
    this.addEditModal.show();
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
  public selectedBirthDay(value: any) {
    this.entity.BirthDay = value.start.format('DD/MM/YYYY');
  }
  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      let fi = this.avatar.nativeElement;
      if (fi.files.length > 0) {
        this.uploadService.postWithFile('/api/upload/saveImage', null, fi.files).then((imageUrl: string) => {
          this.entity.Avatar = imageUrl;
        }).then(() => {
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
        });
      }


    }

  }
  public pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.search();
  }
  private loadRoles() {
    this._dataService.get('/api/appRole/getlistall').subscribe((response: any) => {
      this.roles = response;
    }, error => this._dataService.handleError(error));
  }
}
