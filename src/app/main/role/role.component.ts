import { Component, OnInit, ViewChild } from '@angular/core';
import { AppRole } from '../../core/domain/app.role';
import { DataService } from '../../core/services/data.service';

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
    private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) {
    this._dataService.setAuthenHeader();
  }

  ngOnInit() {
    this.search();
  }
  //Load data
  public search() {
    this._dataService.get('/api/appRole/getlistpaging?page='
      + this.pageIndex + '&pageSize='
      + this.pageSize + '&filter='
      + this.filter)
      .subscribe((response: any) => {
        this.roles = response.Items;
        this.pageIndex = response.PageIndex;
      }, error => this._dataService.handleError(error));
  }
  //Show add form
  public showAdd() {
    this.entity = new AppRole();
    this.addEditModal.show();
  }
  //Show edit form
  public showEdit(id: string) {
    this.entity = this.roles.find(x => x.Id == id);
    this.addEditModal.show();
  }
  //Action delete
  public deleteConfirm(id: string): void {
    this._dataService.delete('/api/appRole/delete', 'id', id).subscribe((response: any) => {
      this.notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
      this.search();
    }, error => this._dataService.handleError(error));
  }
  //Click button delete turn on confirm
  public delete(id: string) {
    this.notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => this.deleteConfirm(id));
  }
  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      if (this.entity.Id == undefined) {
        this._dataService.post('/api/appRole/add', JSON.stringify(this.entity)).subscribe((response: any) => {
          this.search();
          this.addEditModal.hide();
          this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
        }, error => this._dataService.handleError(error));
      }
      else {
        this._dataService.put('/api/appRole/update', JSON.stringify(this.entity)).subscribe((response: any) => {
          this.search();
          this.addEditModal.hide();
          this.notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
        }, error => this._dataService.handleError(error));

      }
    }

  }
  public pageChanged(event: any): void {
    this.pageIndex = event.page;
  }
}
