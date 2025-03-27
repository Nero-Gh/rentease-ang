import {Component} from "@angular/core";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: "dashboard-layout",
  standalone:true,
  imports:[SidebarComponent,RouterOutlet],
  templateUrl: "./dashboard-layout.component.html",
  styleUrls: ["./dashboard-layout.component.scss"]
})

export class DashboardLayoutComponent{}
