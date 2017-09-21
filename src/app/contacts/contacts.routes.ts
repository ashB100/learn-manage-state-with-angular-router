import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const routes = [
    { path: '', component: ContactsComponent }
]

export default RouterModule.forChild(routes);