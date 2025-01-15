import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/routes/landingPagesRoute.routes').then(
        (m) => m.LandingPageRoute
      ),
  },
];
