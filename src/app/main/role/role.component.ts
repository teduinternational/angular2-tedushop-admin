import { Component, OnInit } from '@angular/core';
import { AppRole } from '../../core/domain/app.role';
import { RoleService } from '../../core/services/role.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string;

  public roles: AppRole[];
  constructor(
    private roleService: RoleService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.roleService.getAllPaging(this.pageIndex, this.pageSize, this.filter).subscribe((response: any) => {
      this.roles = response.Items;
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
