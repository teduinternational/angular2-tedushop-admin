import { Component, OnInit, ViewChild } from '@angular/core';
import { AppRole } from '../../core/domain/app.role';
import { RoleService } from '../../core/services/role.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string = '';
  public entity: AppRole;

  public roles: AppRole[];
  constructor(
    private roleService: RoleService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.search();
  }
  public search() {
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
  public showAdd() {
    this.entity = new AppRole();
    this.addEditModal.show();
  }
  public showEdit(id: string) {
    this.entity = this.roles.find(x => x.Id == id);
    this.addEditModal.show();
  }
  public delete(id: string) {
    this.notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, function () {
      this.roleService.delete(id);
      this.notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);

    });
  }
  public saveChanges() {
    console.log(this.entity);
    if (this.entity.Id == undefined) {
      this.roleService.add(this.entity);
      this.addEditModal.hide();
      this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
    }
    else {
      this.roleService.update(this.entity);
      this.addEditModal.hide();
      this.notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
    }
  }
  public pageChanged(event: any): void {
    this.pageIndex = event.page;
  }
}
