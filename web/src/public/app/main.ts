import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [Http, HTTP_PROVIDERS]);
