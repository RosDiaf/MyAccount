import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CmsApiService } from '../common/api/cms/service';
import { Http, BaseRequestOptions } from '@angular/http';
import { MyContractComponent } from './my-contract.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ActivatedRoute, Router, Params, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/observable/of';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PortfolioSummaryApiService } from '../common/api/portfolio-summary/service';
import { cmsData } from '../mocks/cmsDataMocks';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class ActivatedRouteStub {

    parent = {
      params: Observable.of({})
    };

    set testParams(params: any) {
      this.parent.params = Observable.of(params);
    }
}

class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}

let mockCmsApiService = {
  getContent: () => { return Observable.of(cmsData) }
}

class MockCmsApiService {
  getContent() { return Observable.of(cmsData) }
}

describe('MyContractComponent', () => {
  let component: MyContractComponent;
  let fixture: ComponentFixture<MyContractComponent>;
  // let params: Subject<Params>;
  // let activatedRoute: ActivatedRoute;

  // const mockActivatedRoute = { snapshot: {} };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContractComponent ],
      providers: [
        PortfolioSummaryApiService,
        CmsApiService,
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
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
        // { provide: ActivatedRoute, useValue: { params: params } },
        //{ provide: ActivatedRoute, useValue: mockSomeService },
        { provide: Router, useClass: RouterStub },
        //{ provide: CmsApiService, useValue: MockCmsApiService }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContractComponent);
    component = fixture.componentInstance;
    // activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should call Router.navigateByUrl("contract-details/:id") with the contract id', inject([Router], (router: Router) => {
    let cmsApiService = TestBed.get(CmsApiService);
    const spy = spyOn(router, 'navigateByUrl');
    const spyGetContent = spyOn(cmsApiService, 'getContent').and.returnValue(Observable.of(cmsData))
    component.getQueryParameters();
    component.contractId = 3191310000;
    const url = spy.calls.first().args[0];
    expect(url).toBe('contract-details/0');
    expect(spyGetContent).toHaveBeenCalled();
  }));

  describe('CMS Content', () => {
    xit('should get content from CMS', () => {

      //component.cmsApiService = Observable.of(cmsData);


      /*const cmsApiService = TestBed.get(CmsApiService);
      let spy = spyOn(cmsApiService, 'getContent');
      component.getCMSContent();
      expect(spy).toHaveBeenCalled();
      //expect(component.cmsData).toEqual(cmsData);*/
      spyOn(mockCmsApiService, 'getContent').and.returnValue({ subscribe: () => {} });
      component.getCMSContent();
      //spyOn(mockCmsApiService, 'getContent').and.returnValue(Observable.of(cmsData))
      expect(mockCmsApiService.getContent).toHaveBeenCalled();    
    });
  });
});
