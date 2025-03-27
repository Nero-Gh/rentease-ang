import {Component} from '@angular/core';
import {Bath, BedDouble, ChefHat, EllipsisVertical, ListFilter, LucideAngularModule, Search} from "lucide-angular";
import {CardRoom, Room} from "../../../landingPages/models/room";
import {RouterLink} from "@angular/router";
// @ts-ignore
import {LucideIconData} from "lucide-angular/icons/types";
import {FormSliderModalComponent} from "../../components/form-slider-modal/form-slider-modal.component";
import {AddPropertyComponent} from "../add-property/add-property.component";

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterLink,
    FormSliderModalComponent,
    AddPropertyComponent
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {
  public filterIcon = ListFilter;
  readonly menuOptions:LucideIconData = EllipsisVertical
  readonly searchIcon:LucideIconData = Search
  openSlider = false;

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
     ]

  public openSliderModal(){
    this.openSlider = !this.openSlider
  }

  trackByRoomType(index: number, item: Room): string {
    return item.roomType;
  }
}
