import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HeroService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private _title: Title) {
  }

  ngOnInit() {
    this._title.setTitle(this.title);
  }
}
