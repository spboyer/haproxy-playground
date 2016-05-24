import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { HeroService, Hero } from '../shared';
import { Observable, Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero>;
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
