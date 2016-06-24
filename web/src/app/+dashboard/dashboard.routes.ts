import { RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
