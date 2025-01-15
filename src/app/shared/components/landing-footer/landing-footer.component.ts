import { Component } from '@angular/core';
import { LandingWrapperComponent } from '../landing-wrapper/landing-wrapper.component';

@Component({
  selector: 'app-landing-footer',
  standalone: true,
  imports: [LandingWrapperComponent],
  templateUrl: './landing-footer.component.html',
  styleUrl: './landing-footer.component.scss',
})
export class LandingFooterComponent {}
