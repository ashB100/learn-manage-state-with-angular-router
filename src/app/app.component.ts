import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navs = [
    { url: "", content: "Home" },
    { url: "contacts", content: "Contacts" },
    { url: "contacts/1", content: "One" }
  ]
}
