import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
  // BehaviorSubject starts with an initial value
  // Instead of startWith we manually subscibe to the value
  // The Observer of the stream is contact$
  // Now we only have one subscription to the stream with http.get
  // in it.
  // We do have two subscriptions to this.contact$ because
  // the BehaviorSubject is still an Observable
  // but it is not going to make two requests because
  // now it is just observing what comes from this stream 
  // instead of invoking it twice. 
  contact$ = new BehaviorSubject({name: 'loading...', image: ''});

  constructor(private route:ActivatedRoute, private http:Http) { 
    const api = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';
    // params is an Observable
    route.params
      .map((p:any) => p.id)
      .switchMap(id => http.get(api + 'people/' + id)
        .map(res => res.json())
        .map(contact => Object.assign({}, contact, { image: api + contact.image }))
      )
      .subscribe(this.contact$);
  }

  ngOnInit() {
  }

}
