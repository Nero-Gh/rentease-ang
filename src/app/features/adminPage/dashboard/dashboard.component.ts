import {Component} from "@angular/core"
import {DashboardLayoutComponent} from "../components/dashboardLayout/dashboard-layout.component";


@Component({
  selector:"dashboard",
  standalone:true,
  imports:[DashboardLayoutComponent],
  templateUrl:"./dashboard.component.html",
  styleUrls:["./dashboard.component.scss"]
})

export class DashboardComponent{}
