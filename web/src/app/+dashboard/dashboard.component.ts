import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HeroService } from '../shared';
import { Observable, Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Array<Hero>;

  constructor(private _heroService: HeroService, private _router: Router) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero) {
    this._router.navigate(['/detail/:id', { id: hero.id }]);
  }
}
