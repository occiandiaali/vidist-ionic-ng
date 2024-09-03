import { Routes } from '@angular/router';
import { VidistPage } from './vidist.page';

export const routes: Routes = [
  {
    path: 'vidist',
    component: VidistPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'sell',
        loadComponent: () =>
          import('../sell/sell.page').then((m) => m.SellPage),
      },
            {
        path: 'analytics',
        loadComponent: () =>
          import('../analytics/analytics.page').then((m) => m.AnalyticsPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/vidist/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/vidist/home',
    pathMatch: 'full',
  },
];
