import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  Title,
  APP_ROUTER_PROVIDERS
])
.catch(err => console.log(err));
