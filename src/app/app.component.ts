import { Component, ElementRef, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  constructor(private elementRef: ElementRef, private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle("Trang chủ quản trị");
  }
  ngAfterViewChecked() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../src/assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
