import {Hero} from './hero';
import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class HeroService {
    constructor(private _http: Http) { }

    getHeroes() {
         return this._http.get('/api/heroes')
            .map( response => response.json() );
    }

    getHero(id: number){
         return this._http.get('/api/heroes/' + id)
            .map( response => response.json() );
    }
}