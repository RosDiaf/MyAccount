import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CmsApiService } from '../common/api/cms/service';
import { cmsData } from '../mocks/cmsDataMocks';
import { customerData } from '../mocks/customerProfileMocks';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, BaseRequestOptions } from '@angular/http';
import { MyDetailsComponent } from './my-details.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CustomerProfileApiService } from '../common/api/customer-profile/service';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDetailsComponent ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule
      ],
      providers: [
        CmsApiService,
        CustomerProfileApiService,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
