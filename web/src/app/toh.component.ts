import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { DashboardComponent } from './+dashboard';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { HeroService } from './shared';
import { HeroesComponent } from './+heroes';
import { HeroDetailComponent } from './+hero-detail';

@Component({
  moduleId: module.id,
  selector: 'toh-app',
  templateUrl: 'toh.component.html',
  styleUrls: ['toh.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, HeroService]
})
@RouteConfig([
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class TohAppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private _title: Title) {
  }

  ngOnInit() {
    this._title.setTitle(this.title);
  }
}
