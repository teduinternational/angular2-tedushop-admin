import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../core/services/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notificationService : NotificationService) { }

  ngOnInit() {
    this.notificationService.printSuccessMessage('Alo');
  }

}
