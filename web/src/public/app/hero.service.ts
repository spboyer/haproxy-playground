import {Hero} from './hero';
//import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
    constructor(private _http: Http) { }

    getHeroes() {
    let observable = this._http.get('api/heroes')
      .map(function(response: Response) {
        return <Hero[]>response.json();
      });
    return observable;
  }

/*  getHeroes() {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }*/
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/