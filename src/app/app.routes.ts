import { Routes } from '@angular/router';
import {NotFoundComponent} from "./features/notFound/not-found.component";
import {DashboardLayoutComponent} from "./features/adminPage/components/dashboardLayout/dashboard-layout.component";

export const routes: Routes = [
   {
    path: 'home',
    loadChildren: () =>
      import('./core/routes/landingPagesRoute.routes').then(
        (m) => m.LandingPageRoute
      ),
  },
  {
    path:'admin',
    component:DashboardLayoutComponent,
    loadChildren:()=> import('./core/routes/dashboard.routes').then(
      (m)=>m.DashboardRoutes
    )
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];
