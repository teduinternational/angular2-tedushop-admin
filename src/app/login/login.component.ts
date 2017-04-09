import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageContstants } from '../core/common/message.constants';
import { UrlConstants } from '../core/common/url.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenService: AuthenService,
    private notificationService: NotificationService) { }

  ngOnInit() {
  }
  login() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([UrlConstants.HOME]);
      },
      error => {
        this.notificationService.printErrorMessage(MessageContstants.SYSTEM_ERROR_MSG);
        this.loading = false;
      });
  }
}
