import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';

import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TreeComponent } from 'angular-tree-component';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;

  @ViewChild(TreeComponent)
  private treeFunction: TreeComponent;
  public filter: string = '';
  public entity: any;
  public _permission: any[];
  public functionId: string;
  public _functionsHierachy: any[];
  public _functions: any[];
  public editFlg: boolean;
  constructor(
    private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.search();
  }
  //Load data
  public search() {
    this._dataService.get('/api/postCategory/getall?filter=' + this.filter)
      .subscribe((response: any[]) => {
        this._functions = response.filter(x => x.ParentId == null);
        this._functionsHierachy = this.utilityService.Unflatten(response);
      }, error => this._dataService.handleError(error));
  }
  //Show add form
  public showAdd() {
    this.entity = {};
    this.addEditModal.show();
    this.editFlg = false;
  }
  //Show edit form
  public showEdit(id: string) {
    this._dataService.get('/api/postCategory/detail/' + id).subscribe((response: any) => {
      this.entity = response;
      this.editFlg = true;
      this.addEditModal.show();
    }, error => this._dataService.handleError(error));
  }

  //Action delete
  public deleteConfirm(id: string): void {
    this._dataService.delete('/api/postCategory/delete', 'id', id).subscribe((response: any) => {
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
      if (this.editFlg == false) {
        this._dataService.post('/api/postCategory/add', JSON.stringify(this.entity)).subscribe((response: any) => {
          this.search();
          this.addEditModal.hide();
          this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
        }, error => this._dataService.handleError(error));
      }
      else {
        this._dataService.put('/api/postCategory/update', JSON.stringify(this.entity)).subscribe((response: any) => {
          this.search();
          this.addEditModal.hide();
          this.notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
        }, error => this._dataService.handleError(error));

      }
    }

  }
}
