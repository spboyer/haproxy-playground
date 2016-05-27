import { Component, Input } from '@angular/core';
import { OnActivate, Router, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import { Hero, HeroService } from '../shared';
import { Observable, Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeroDetailComponent implements OnActivate {
  @Input() hero: Hero;

  constructor(private _heroService: HeroService) {
  }

  routerOnActivate(curr: RouteSegment) {
    let id = +curr.getParam('id');
    this._heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
