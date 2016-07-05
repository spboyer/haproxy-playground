import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import 'rxjs/add/operator/map';
import { environment } from '../environment';

@Injectable()
export class HeroService {
  constructor(private _http: Http) {
  }

  getHeroes(): Observable<Hero[]> {
    let url: string;
    if (environment.production) {
      url = '/api/heroes';
    }
    else {
      url = 'http://localhost:3000/heroes';
    }

    return this._http.get(url).map(
      response => <Hero[]>response.json()
    );
  }

  getHero(id: number): Observable<Hero> {
    let url: string;
    if (environment.production) {
      url = '/api/heroes/' + id;
    }
    else {
      url = 'http://localhost:3000/heroes/' + id;
    }

    return this._http.get(url).map(
      response => <Hero>response.json()
    );
  }
}
