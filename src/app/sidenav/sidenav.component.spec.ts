import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavComponent } from './sidenav.component';
import { CmsApiService } from '../common/api/cms/service';
import { cmsData } from '../mocks/cmsDataMocks';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import {
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';

import { ToolbarComponent } from '../toolbar/toolbar.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent, ToolbarComponent ],
      imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render my account in navigation list', async(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu').textContent).not.toBeNull();
  }));

  it('should render close button in side menu', async(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    fixture.detectChanges();
    component.cmsDataContent = cmsData;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn-close').textContent).not.toBeNull();
  }));

  it('should open side menu when clicking menu button', () => {
    component.openMenu();
    const menuDe = fixture.debugElement.query(By.css('#menu'));
    const menuEl: HTMLElement = menuDe.nativeElement;
    const menuStyle = menuEl.getAttribute('style');
    expect(menuStyle).toEqual('box-shadow: none; visibility: hidden;');
    expect(component.menu._opened).toBeTruthy();
  });

  it('should close side menu when clicking close button', () => {
    fixture.detectChanges();
    expect(component.menu._opened).toBeFalsy();
  });
});
