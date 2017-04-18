import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { UserService } from '../../core/services/user.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';


import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string;

  public users: AppUser[];
  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.userService.getAllPaging(this.pageIndex, this.pageSize, this.filter).subscribe((response: any) => {
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
  }
}
