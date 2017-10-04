import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <p>
      I am contacts component!
    </p>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
