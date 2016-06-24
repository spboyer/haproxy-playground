import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Hero, HeroService } from '../shared';
import { Observable, Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  private sub: Subscription;

  constructor(private _heroService: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this._heroService.getHero(id).subscribe(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
