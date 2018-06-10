import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CmsApiService } from '../common/api/cms/service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() darkTheme: EventEmitter<any> = new EventEmitter<any>();
  @Output() openMenu: EventEmitter<any> = new EventEmitter<any>();

  isDarkTheme: boolean;
  cmsDataContent: any;
  title = 'My Account';

  constructor(private cmsApiService: CmsApiService) { }

  ngOnInit() {
    this.cmsApiService.getContent().subscribe(data => {
      this.cmsDataContent = data;
    });
  }

  setDarkTheme() {
    this.darkTheme.emit();
  }

  menuOpen() {
    this.openMenu.emit();
  }

  changeTheme(theme) {
    this.darkTheme.emit(theme);
  }
}
