import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CmsApiService } from '../common/api/cms/service';
import { PortfolioSummaryApiService } from '../common/api/portfolio-summary/service';

@Component({
  templateUrl: './my-contract.component.html',
  styleUrls: ['./my-contract.component.css']
})
export class MyContractComponent implements OnInit {

  contractId: any;
  portfolioSummaryData: any;
  cmsData: any;

  constructor(public cmsApiService: CmsApiService,
              public route: ActivatedRoute,
              public router: Router,
              public PortfolioSummaryApiService: PortfolioSummaryApiService) { }

  ngOnInit() {
    this.getCMSContent();
    this.getPortfolioSummaryData();
    this.getQueryParameters();
  }

  getCMSContent() {
    this.cmsApiService.getContent().subscribe(data => {
      this.cmsData = data;
      console.log(this.cmsData);
    }, (error) => {
      console.log(error);
    });
  }

  getQueryParameters() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params['contractId']) {
        this.contractId = params['contractId'];
        this.router.navigateByUrl('/contract-details');
      }
    }, (error) => {
        console.log(error);
    });
  }

  getPortfolioSummaryData() {
    this.PortfolioSummaryApiService.getPortfolioSummaryData().subscribe(data => {
      this.portfolioSummaryData = data;
    }, (error) => {
      console.log(error);
  });
  }
}
