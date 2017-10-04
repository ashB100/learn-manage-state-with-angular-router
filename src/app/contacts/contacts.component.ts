import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contacts',
  template: `
    <div *ngFor="let contact of contacts$ | async">
      <a [routerLink]="contact.id">
        {{contact.name}}
      </a>
    </div>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {
  contacts$;

  constructor(private http:Http) { 
    this.contacts$ = http.get('https://starwars-json-server-ewtdxbyfdz.now.sh/people')
      .map(res => res.json());
  }

  ngOnInit() {
  }

}
