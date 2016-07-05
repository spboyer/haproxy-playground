import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './+dashboard';
import { HeroesRoutes } from './+heroes';
import { HeroDetailRoutes } from './+hero-detail';

export const routes: RouterConfig = [
  ...DashboardRoutes,
  ...HeroesRoutes,
  ...HeroDetailRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
