import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsComponent } from './contacts.component';
import { ContactsService } from '../common/api/contact-service/service';
import {
  MatMenuModule,
  MatIconModule,
  MatDialogModule,
  MatListModule,
} from '@angular/material';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
      ],
      providers: [ContactsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
