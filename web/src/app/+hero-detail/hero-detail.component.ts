import { Component, OnInit, Input } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Hero, HeroService } from '../shared';
import { Observable, Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private _heroService: HeroService, private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
