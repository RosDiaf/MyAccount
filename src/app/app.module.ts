import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CmsApiService } from './common/api/cms/service';
import { ContactsService } from './common/api/contact-service/service';
import { CustomerProfileApiService } from './common/api/customer-profile/service';
import { PortfolioSummaryApiService } from './common/api/portfolio-summary/service';

import {
  MatMenuModule,
  MatGridListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';

import 'hammerjs';
import { ContactsComponent, AddContactDialogComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';
import { FooterComponent } from './footer/footer.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyContractComponent } from './my-contract/my-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactDialogComponent,
    PopularComponent,
    FooterComponent,
    MyAccountComponent,
    SidenavComponent,
    ToolbarComponent,
    MyDetailsComponent,
    MyContractComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    //NgbModule.forRoot(),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    //NoConflictStyleCompatibilityMode,
    routing,
  ],
  exports: [],
  providers: [CmsApiService, ContactsService, CustomerProfileApiService, PortfolioSummaryApiService],
  bootstrap: [AppComponent],
  entryComponents: [AddContactDialogComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
