import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  constructor(private _http: Http) {
  }

  getHeroes(): Observable<Hero[]> {
    return this._http.get('/api/heroes').map(
      response => <Hero[]>response.json()
    );
  }

  getHero(id: number): Observable<Hero> {
    return this._http.get('/api/heroes/' + id).map(
      response => <Hero>response.json()
    );
  }
}
