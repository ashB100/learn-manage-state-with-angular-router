import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      contact {{(contact$ | async)?.name}}
    </h2>
    <img [src]="(contact$ | async).image">
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  contact$;

  constructor(private route:ActivatedRoute, private http:Http) { 
    const api = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';
    // params is an Observable
    this.contact$ = route.params
      .map((p:any) => p.id)
      .switchMap(id => http.get(api + 'people/' + id)
        .map(res => res.json())
        .map(contact => Object.assign({}, contact, { image: api + contact.image }))
      )
      .startWith({name: 'loading...'});
  }

  ngOnInit() {
  }

}
