import { Component } from '@angular/core';
import { LandingWrapperComponent } from '../../../shared/components/landing-wrapper/landing-wrapper.component';
import { LandingNavigationComponent } from '../../../shared/components/landing-navigation/landing-navigation.component';
import { LandingFooterComponent } from '../../../shared/components/landing-footer/landing-footer.component';
import { LucideAngularModule, Bed, Bath, ChefHat, Waves } from 'lucide-angular';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    LandingWrapperComponent,
    LandingNavigationComponent,
    LandingFooterComponent,
    LucideAngularModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  public bedroom = Bed;
  public kitchen = ChefHat;
  public waves = Waves;
  public washroom = Bath;
}
