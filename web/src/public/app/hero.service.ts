import {Hero} from './hero';
import {Injectable} from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
    constructor(private _http: Http) { }

    getHeroes() {
        // return an observable
        return this._http.get('/api/heroes')
            .map((response) => {
                return response.json();
            });
            // .map((heroes: Array<any>) => {
            //     let result: Array<Hero> = [];
            //     if (heroes) {
            //         heroes.forEach((hero) => {
            //             result.push(new Hero(hero.Id, hero.Name));
            //         });
            //     }
            //     return result;
            // });
    }
}