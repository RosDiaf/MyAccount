import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './toolbar.component';
import { CmsApiService } from '../common/api/cms/service';
import { cmsData } from '../mocks/cmsDataMocks';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
} from '@angular/material';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
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
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'My Account'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Account');
  }));

  it('should render app title', () => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component.cmsDataContent = cmsData;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#app-title').textContent).toContain('My Account');
  });

  xit('should render toggle button in toolbar', () => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component.cmsDataContent = cmsData;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn-toggle').textContent).not.toBeNull();
  });
});
