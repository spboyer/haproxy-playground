import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { DashboardComponent } from './+dashboard';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HeroService } from './shared';
import { HeroesComponent } from './+heroes';

@Component({
  moduleId: module.id,
  selector: 'toh-app',
  templateUrl: 'toh.component.html',
  styleUrls: ['toh.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, HeroService]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent/*, useAsDefault: true*/},
  {path: '/heroes', component: HeroesComponent}
])
export class TohAppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private _title: Title, private _router: Router) {
  }

  ngOnInit() {
    this._title.setTitle(this.title);
    this._router.navigate(['/dashboard']);
  }
}
