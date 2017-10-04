import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsComponent } from "./contacts.component";
import { ContactComponent } from "./contact.component";
import { HttpModule } from '@angular/http';
import contactsRoutes from "./contacts.routes";

@NgModule({
    imports:[
      CommonModule, 
      contactsRoutes,
      HttpModule
    ],
    declarations: [
      ContactsComponent, 
      ContactComponent
    ]
})
export default class ContactsModule{}
