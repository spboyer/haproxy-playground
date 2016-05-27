import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HeroService } from './shared';
import { DashboardComponent } from './+dashboard';
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
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/heroes', component: HeroesComponent},
  {path: '/detail/:id', component: HeroDetailComponent}
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
