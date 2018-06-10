import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularComponent } from './popular.component';
import { CmsApiService } from '../common/api/cms/service';
import { cmsData } from '../mocks/cmsDataMocks';
import { ContactsService } from '../common/api/contact-service/service';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  MatCardModule,
} from '@angular/material';

describe('PopularComponent', () => {
  let component: PopularComponent;
  let fixture: ComponentFixture<PopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularComponent ],
      imports: [
        MatCardModule,
      ],
      providers: [
        ContactsService,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
