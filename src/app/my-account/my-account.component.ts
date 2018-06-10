import { Component, OnInit } from '@angular/core';
import { CmsApiService } from '../common/api/cms/service';
import { CustomerProfileApiService } from '../common/api/customer-profile/service';
import { PortfolioSummaryApiService } from '../common/api/portfolio-summary/service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  customerProfileData: any;
  cmsData: any;
  portfolioSummaryData: any;

  constructor(private CustomerProfileApiService: CustomerProfileApiService,
              private cmsApiService: CmsApiService,
              private PortfolioSummaryApiService: PortfolioSummaryApiService) { }

  ngOnInit() {
    this.getCMSContent();
    this.getCustomerData();
    this.getPortfolioSummaryData();
  }

  getCMSContent() {
    this.cmsApiService.getContent().subscribe(data => {
      this.cmsData = data;
      console.log(data);
    });
  }

  getCustomerData() {
    this.CustomerProfileApiService.getCustomerProfile().subscribe(data => {
      this.customerProfileData = data;
      console.log(data);
    });
  }

  getPortfolioSummaryData() {
    this.PortfolioSummaryApiService.getPortfolioSummaryData().subscribe(data => {
      this.portfolioSummaryData = data;
      console.log(data);
    });
  }
}
