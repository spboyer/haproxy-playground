import {Hero} from './hero';
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
}