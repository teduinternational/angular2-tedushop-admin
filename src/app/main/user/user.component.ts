import { Component, OnInit, ViewChild } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;

  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string;
  public entity: AppUser;
  public users: AppUser[];
  constructor(
    private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) {
    this._dataService.setAuthenHeader();

  }
  //Show add form
  public showAdd() {
    this.entity = new AppUser();
    this.addEditModal.show();
  }
  ngOnInit() {
    this.search();

  }
  public search() {
    this._dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter).subscribe((response: any) => {
      this.users = response.Items;
      this.pageIndex = response.PageIndex;
    }, error => {
      if (error.status == 401) {
        this.notificationService.printErrorMessage(MessageContstants.LOGIN_AGAIN_MSG);
        this.utilityService.navigateToLogin();
      }
    });
  }
  public delete(id: string) {
    this.notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, function () {

    });
  }

  public pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.search();
  }
}
