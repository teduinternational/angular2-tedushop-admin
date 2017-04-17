import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { UserService } from '../../core/services/user.service';
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
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllPaging(this.pageIndex, this.pageSize, this.filter).subscribe((response: any) => {
      this.users = response.Items;
      this.pageIndex = response.PageIndex;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  public setPage(pageNo: number): void {
    this.pageIndex = pageNo;
  }

  public pageChanged(event: any): void {
    this.pageIndex = event.page;
  }
}
