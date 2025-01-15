import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Bath, BedDouble, ChefHat, LucideAngularModule } from 'lucide-angular';
import { LandingNavigationComponent } from '../../../shared/components/landing-navigation/landing-navigation.component';
import { LandingWrapperComponent } from '../../../shared/components/landing-wrapper/landing-wrapper.component';
import { CardRoom, Room } from '../models/room';
import { LandingFooterComponent } from '../../../shared/components/landing-footer/landing-footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LandingWrapperComponent,
    LandingNavigationComponent,
    LucideAngularModule,
    LandingFooterComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public rooms: Room[] = [
    {
      image: 'assets/bedroom.png',
      total: 128,
      roomType: 'Single room',
    },
    {
      image: 'assets/treasure.png',
      total: 64,
      roomType: 'Double room',
    },
    {
      image: 'assets/traveler.png',
      total: 45,
      roomType: 'Hostel',
    },

    {
      image: 'assets/cities.png',
      total: 11,
      roomType: 'location',
    },
  ];

  public data = BedDouble;

  public cardRoom: CardRoom<typeof BedDouble | typeof ChefHat | typeof Bath>[] =
    [
      {
        image:
          'https://plus.unsplash.com/premium_photo-1661962296943-bc59322f6424?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Kofi Bar',
        price: 2000,
        location: 'Accra Lapaz',
        icon: BedDouble,
        room: 2,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
      {
        image:
          'https://images.unsplash.com/photo-1591465709469-5de113a071cc?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Mum's Kitchen",
        price: 1500,
        location: 'Accra East Legon',
        icon: BedDouble,
        room: 3,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
      {
        image:
          'https://images.unsplash.com/photo-1636137628585-db2f13cad125?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Kumasi Bar',
        price: 2500,
        location: 'Kumasi Ahinsan Estate',
        icon: BedDouble,
        room: 5,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
      {
        image:
          'https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Tamale Bar',
        price: 3000,
        location: 'Tamale Vittin Estate',
        icon: BedDouble,
        room: 4,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
      {
        image:
          'https://images.unsplash.com/photo-1722560394461-19f310d398c1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Cape Coast Bar',
        price: 2000,
        location: 'Cape Coast UCC',
        icon: BedDouble,
        room: 6,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
      {
        image:
          'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Koforidua Bar',
        price: 2500,
        location: 'Koforidua New Juaben',
        icon: BedDouble,
        room: 8,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
      {
        image:
          'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Takoradi Bar',
        price: 3000,
        location: 'Takoradi Sekondi-Takoradi',
        icon: BedDouble,
        room: 7,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },

      {
        image:
          'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Tarkwa Bar',
        price: 3500,
        location: 'Tarkwa UMaT',
        icon: BedDouble,
        room: 1,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
      {
        image:
          'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sunyani Bar',
        price: 4000,
        location: 'Sunyani UENR',
        icon: BedDouble,
        room: 9,
        kitchen: 0,
        kitchenIcon: ChefHat,
        washroom: 0,
        washroomIcon: Bath,
      },
    ];

  trackByRoomType(index: number, item: Room): string {
    return item.roomType;
  }
}
