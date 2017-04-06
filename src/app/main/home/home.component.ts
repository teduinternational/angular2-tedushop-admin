import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees : any[];

  constructor(private _homeService : HomeService) { }

  ngOnInit() {
    this._homeService.getEmployees().subscribe((response:any)=>{
        this.employees = response;
    });
  }

}
