import { Route } from '@angular/router';
import { HomeComponent } from '../../features/landingPages/home/home.component';
import { ProductDetailComponent } from '../../features/landingPages/product-detail/product-detail.component';

export const LandingPageRoute: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];
