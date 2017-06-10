import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private elementRef: ElementRef,
    private titleService: Title) {

  }

  ngOnInit() {
   
    this.titleService.setTitle("Trang chủ quản trị");
  }
}
