import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./vidist/vidist.routes').then((m) => m.routes),
  },
];
