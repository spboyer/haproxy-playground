import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { TohAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TohAppComponent, [Title]);

