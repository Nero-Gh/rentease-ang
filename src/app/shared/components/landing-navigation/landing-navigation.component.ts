import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-landing-navigation',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './landing-navigation.component.html',
  styleUrl: './landing-navigation.component.scss',
})
export class LandingNavigationComponent {
  public showMenu = false;
  readonly menuIcon = Menu;
  readonly menuClose = X;

  public ShowMenuToggle() {
    this.showMenu = !this.showMenu;
  }
}
