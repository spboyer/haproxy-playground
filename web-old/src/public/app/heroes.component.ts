import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { Http } from 'angular2/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero>;
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) { }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  ngOnInit() {
      this._heroService.getHeroes()
          .subscribe(res => this.heroes = res);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
