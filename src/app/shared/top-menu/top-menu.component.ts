import { Component, OnInit, NgZone } from '@angular/core';
import { AppUser } from '../../core/domain/app-user';
import { SystemConstants } from '../../core/common/system.constants';
import { SignalrService } from '../../core/services/signalr.service';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user: AppUser;
  public announcements: any[];
  public baseFolder: string = SystemConstants.BASE_API;
  public canSendMessage: Boolean;

  constructor(
    private _signalRService: SignalrService,
    private _dataService: DataService,
    private _ngZone: NgZone) {
    // this can subscribe for events  
    this.subscribeToEvents();
    // this can check for conenction exist or not.  
    this.canSendMessage = _signalRService.connectionExists;

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    this.loadAnnouncements();
  }
  private loadAnnouncements() {
    this._dataService.get('/api/Announcement/getTopMyAnnouncement').subscribe((response: any) => {
      this.announcements = [];
      for (let item of response) {
        item.CreatedDate = moment(moment().format("YYYYMMDD"), "YYYYMMDD").fromNow();
        this.announcements.push(item);
      }

    });
  }
  markAsRead(id: number) {
    var body = { announId: id };
    this._dataService.get('/api/Announcement/markAsRead?announId=' + id.toString()).subscribe((response: any) => {
      if (response) {
        this.loadAnnouncements();
      }
    });
  }
  private subscribeToEvents(): void {

    var self = this;
    self.announcements = [];

    // if connection exists it can call of method.  
    this._signalRService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    // finally our service method to call when response received from server event and transfer response to some variable to be shwon on the browser.  
    this._signalRService.announcementReceived.subscribe((announcement: any) => {
      this._ngZone.run(() => {
        announcement.CreatedDate = moment(moment().format("YYYYMMDD"), "YYYYMMDD").fromNow();
        self.announcements.push(announcement);
      });
    });
  }

}
