import { Component } from '@angular/core';
import { LandingNavigationComponent } from '../landing-navigation/landing-navigation.component';

@Component({
  selector: 'app-landing-wrapper',
  standalone: true,
  imports: [LandingNavigationComponent],
  templateUrl: './landing-wrapper.component.html',
  styleUrl: './landing-wrapper.component.scss',
})
export class LandingWrapperComponent {}
