import { Component, OnInit } from '@angular/core';
import { CmsApiService } from '../common/api/cms/service';
import { CustomerProfileApiService } from '../common/api/customer-profile/service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.scss']
})
export class MyDetailsComponent implements OnInit {

  customerProfileData: any;
  cmsData: any;
  profileDetailsForm: FormGroup;

  constructor(private CustomerProfileApiService: CustomerProfileApiService,
              private cmsApiService: CmsApiService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCMSContent();
    this.getCustomerData();
    this.buildForm();
  }

  buildForm() {
    this.profileDetailsForm = this.formBuilder.group({
      title: this.formBuilder.control(null, [Validators.required, Validators.pattern('^[0-9-+ ]+$')]),
    });
  }

  getCMSContent() {
    this.cmsApiService.getContent().subscribe(data => {
      this.cmsData = data;
    });
  }

  getCustomerData() {
    this.CustomerProfileApiService.getCustomerProfile().subscribe(data => {
      this.customerProfileData = data;
    });
  }
}
