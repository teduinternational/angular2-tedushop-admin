import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { UserService } from '../../core/services/user.service';
import { NotificationService } from '../../core/services/notification.service';
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
  constructor(private router: Router, private userService: UserService, private notificationService: NotificationService) {
   }

  ngOnInit() {
    this.userService.getAllPaging(this.pageIndex, this.pageSize, this.filter).subscribe((response: any) => {
      this.users = response.Items;
      this.pageIndex = response.PageIndex;
      console.log(response.Items);
    }, error => {
      if (error.status == 401) {
        this.notificationService.printErrorMessage('Bạn phải đăng nhập lại');
        this.router.navigate(['/login']);
      }
    });
  }
  public setPage(pageNo: number): void {
    this.pageIndex = pageNo;
  }

  public pageChanged(event: any): void {
    this.pageIndex = event.page;
  }
}
