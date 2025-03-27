import {Component} from '@angular/core';
import {ArrowLeftCircle, ArrowRightCircle, Home, LayoutDashboard, LucideAngularModule, Mail} from "lucide-angular";
// @ts-ignore
import {LucideIconData} from "lucide-angular/icons/types";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
readonly sideBarIconOpen = ArrowRightCircle
readonly sideBarIconClose = ArrowLeftCircle
readonly homeIcon = Home

 public menuOpen = false

public menuItems:{ readonly icon:LucideIconData,menu:string,link:string}[] = [{
icon:LayoutDashboard,
menu:"Dashboard",
link:"/admin/dashboard"
  },
    {
icon:Home,
menu:"Properties",
link:"/admin/properties"
    },
  {
    icon:Mail,
    menu:"Inquiries",
    link:"/admin/inquiries"
  }

  ]



public  menuHandler(){
  this.menuOpen = !this.menuOpen
  }
}
