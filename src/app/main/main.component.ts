import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppUser } from '../core/domain/app-user';
import { SystemConstants } from '../core/common/system.constants';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, AfterViewInit {
  public user: AppUser;
  constructor(private elementRef: ElementRef, private titleService: Title) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
  }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../src/assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
