import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-not-found',
  template: `
    <p>
      not-found Works!
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this._router.navigate(['/dashboard']);
  }

}
