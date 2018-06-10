import { Component, OnInit } from '@angular/core';
import { CmsApiService } from '../common/api/cms/service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  cmsData: any;

  constructor(private cmsApiService: CmsApiService) { }

  ngOnInit() {
    this.getCMSContent();
  }

  getCMSContent() {
    this.cmsApiService.getContent().subscribe(data => {
      this.cmsData = data;
    });
  }
}
