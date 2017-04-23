import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/services/data.service';
import { Function } from './../../core/domain/function';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  public functions: Function[];

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.dataService.get('/api/function/getlistall').subscribe((response: any) => {
      this.functions = response;
    }, error => this.dataService.handleError(error));
  }

}
