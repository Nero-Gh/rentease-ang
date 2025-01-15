import { icons } from 'lucide-angular';
export type Room = {
  image: string;
  total: number;
  roomType: string;
};

export type CardRoom<T> = {
  image: string;
  name: string;
  price: number;
  location: string;
  icon: T;
  room: number;
  kitchen: number;
  kitchenIcon: T;
  washroom: 0;
  washroomIcon: T;
};
