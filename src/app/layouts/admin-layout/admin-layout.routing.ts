import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { OperarComponent } from 'src/app/pages/operar/operar.component';
import { CorretoraComponent } from 'src/app/pages/corretora/corretora.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "operar", component: OperarComponent },
  { path: "corretora", component: CorretoraComponent },
  
];
