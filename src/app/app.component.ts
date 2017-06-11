import { Component, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  constructor(private elementRef: ElementRef,
    private titleService: Title) {

  }
  ngAfterViewChecked() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  ngOnInit() {

    this.titleService.setTitle("Trang chủ quản trị");
  }
}
