import { Route } from '@angular/router';
import { HomeComponent } from '../../features/landingPages/home/home.component';
import { ProductDetailComponent } from '../../features/landingPages/product-detail/product-detail.component';
import { ProductPropertiesComponent } from '../../features/landingPages/product-properties/product-properties.component';

export const LandingPageRoute: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'properties',
    component: ProductPropertiesComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];
