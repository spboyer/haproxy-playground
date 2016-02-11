import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
    public heroes: Observable<Hero[]>;

  constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit() {
    this._heroService.getHeroes();
  }

  gotoDetail(hero: Hero) {
    this._router.navigate(['HeroDetail', { id: hero.id }]);
  }
}
