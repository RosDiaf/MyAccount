import { Component, OnInit } from '@angular/core';
import { CmsApiService } from '../common/api/cms/service';
import { ContactsService } from '../common/api/contact-service/service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  contacts: any[];
  cmsData: any;

  constructor(private contactsService: ContactsService,
              private cmsApiService: CmsApiService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts().slice(0, 3);
    this.getCMSContent();
  }

  getCMSContent() {
    this.cmsApiService.getContent().subscribe(data => {
      this.cmsData = data;
    });
  }
}
