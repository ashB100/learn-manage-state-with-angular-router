import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';

const routes = [
    { path: '', component: ContactsComponent },
    { path: ':id', component: ContactComponent}
];

export default RouterModule.forChild(routes);