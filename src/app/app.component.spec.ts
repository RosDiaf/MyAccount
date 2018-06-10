import { AppComponent } from './app.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { CmsApiService } from './common/api/cms/service';
import { cmsData } from './mocks/cmsDataMocks';
import { FooterComponent } from './footer/footer.component';
import { Http, BaseRequestOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        SidenavComponent,
        ToolbarComponent
      ],
      imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
     providers: [
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
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // component.cmsDataContent = cmsData;
    // component.customerProfileData = Observable.of(PortfolioSummary);
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
