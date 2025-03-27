import {DashboardComponent} from "../../features/adminPage/dashboard/dashboard.component";
import {Route} from "@angular/router";
import {NotFoundComponent} from "../../features/notFound/not-found.component";
import {PropertiesComponent} from "../../features/adminPage/properties/propertyList/properties.component";


export const DashboardRoutes:Route[] = [
  {
    path:"dashboard",
    component:DashboardComponent,
  },
  {
path:"properties",
component:PropertiesComponent
  },
  {
    path:"",
    redirectTo:"dashboard",
    pathMatch:"full"
  },
  {
    path:"**",
    component:NotFoundComponent
  }

]
