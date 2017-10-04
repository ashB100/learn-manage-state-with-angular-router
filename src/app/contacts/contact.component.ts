import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact',
  template: `
    <p>
      contact {{ id | async }}
    </p>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  id;
  
  constructor(private route:ActivatedRoute) { 
    // params is an Observable
    this.id = route.params.map((p:any) => p.id);
  }

  ngOnInit() {
  }

}
