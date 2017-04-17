import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;


  public users: AppUser[];
  constructor() { }

  ngOnInit() {
    this.users = [
      { id: '12', avatar: "", email: "12", fullName: "Toan", username: "toanbn", access_token: "" },
      { id: '12', avatar: "", email: "12", fullName: "Toan", username: "toanbn", access_token: "" },
      { id: '12', avatar: "", email: "12", fullName: "Toan", username: "toanbn", access_token: "" },
      { id: '12', avatar: "", email: "12", fullName: "Toan", username: "toanbn", access_token: "" },
      { id: '12', avatar: "", email: "12", fullName: "Toan", username: "toanbn", access_token: "" },
      { id: '12', avatar: "", email: "12", fullName: "Toan", username: "toanbn", access_token: "" },
      { id: '12', avatar: "", email: "12", fullName: "Toan", username: "toanbn", access_token: "" },
    ]
  }
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
