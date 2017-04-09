import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { SystemConstants } from '../../core/common/system.constants';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user: AppUser;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
  }

}
