import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CmsApiService } from '../common/api/cms/service';
import { cmsData } from '../mocks/cmsDataMocks';
import { Http, BaseRequestOptions } from '@angular/http';
import { FooterComponent } from './footer.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  MatToolbarModule,
} from '@angular/material';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        MatToolbarModule,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should append anchor element to DOM when component loads ', () => {
    const aboutUs = document.getElementById('footer-about');
    aboutUs.innerHTML = 'About us';

    fixture.detectChanges();
    component.cmsData = cmsData;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#footer-about').textContent).not.toBeNull();
    expect(compiled.querySelector('#footer-tandc').textContent).not.toBeNull();
    expect(compiled.querySelector('#footer-policy').textContent).not.toBeNull();
    expect(compiled.querySelector('#footer-accessibility').textContent).not.toBeNull();
    expect(compiled.querySelector('#footer-contact').textContent).not.toBeNull();

    expect(compiled.querySelector('#footer-about').textContent).toContain(component.cmsData.footer.aboutUs);
  });
});
