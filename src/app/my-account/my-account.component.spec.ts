import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CmsApiService } from '../common/api/cms/service';
import { cmsData } from '../mocks/cmsDataMocks';
import { customerData } from '../mocks/customerProfileMocks';
import { Http, BaseRequestOptions } from '@angular/http';
import { MyAccountComponent } from './my-account.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CustomerProfileApiService } from '../common/api/customer-profile/service';
import { PortfolioSummaryApiService } from '../common/api/portfolio-summary/service';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatCardModule,
} from '@angular/material';

import { Observable } from 'rxjs/Observable';
// import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';

/* @Pipe({
  name: 'async',
  pure: false
}) */

class MockPortfolioSummaryApiService {
  // getCustomerProfile() { return Observable.of(customerData) }
}

/*export class MockAsyncPipe implements Pipe {
  name: string = '';
  transform(query: string, ...args: any[]): any {
    return query;
  }
}*/

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountComponent ],
      imports: [
        MatCardModule,
        RouterTestingModule
      ],
      providers: [
        CmsApiService,
        CustomerProfileApiService,
        PortfolioSummaryApiService,
        Http,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        // { provide: CustomerProfileApiService, useClass: MockPortfolioSummaryApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should append my account details to DOM', () => {
    fixture.detectChanges();
    component.customerProfileData = cmsData;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#customer-name').textContent).not.toBeNull();
    expect(compiled.querySelector('#work-email').textContent).not.toBeNull();
    expect(compiled.querySelector('#personal-email').textContent).not.toBeNull();
    expect(compiled.querySelector('#postal-address').textContent).not.toBeNull();
    expect(compiled.querySelector('#view-details').textContent).not.toBeNull();
    // expect(compiled.querySelector('#customer-name').textContent).toContain('Mr Johny Bravo')
  });

  it('should append my account details to DOM', () => {
    fixture.detectChanges();
    component.customerProfileData = cmsData;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#contract-list').textContent).not.toBeNull();
  });
});
