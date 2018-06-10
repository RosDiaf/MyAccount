import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { CmsApiService } from '../common/api/cms/service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() darkTheme: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('menu') menu;

  title = 'My Account';
  cmsDataContent: any;

  constructor(private cmsApiService: CmsApiService) { }

  ngOnInit() {
    this.cmsApiService.getContent().subscribe(data => {
      this.cmsDataContent = data;
    });
  }

  setDarkTheme(theme) {
    this.darkTheme.emit(theme);
  }

  openMenu() {
    this.menu.open();
  }
}
