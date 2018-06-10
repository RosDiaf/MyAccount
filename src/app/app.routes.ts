import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent, AddContactDialogComponent } from './contacts/contacts.component';
import { MyContractComponent } from './my-contract/my-contract.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { PopularComponent } from './popular/popular.component';

// Route Configuration
const routes: Routes = [
  {
    path: '',
    component: PopularComponent
  },
  {
    path: 'my-account', component: MyAccountComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  },
  {
    path: 'my-details',
    component: MyDetailsComponent
  },
  {
    path: 'contract-details',
    component: MyContractComponent
  }
];
export const routing = RouterModule.forRoot(routes, { useHash: true });
