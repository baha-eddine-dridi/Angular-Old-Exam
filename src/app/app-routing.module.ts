import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MenuDetailsComponent} from "./components/menu-details/menu-details.component";

const routes: Routes = [
  {
    path: 'addMenu', loadChildren:
      () => import('./features/menu/menu.module')
        .then(m => m.MenuModule)
  },
  {
    path: 'reservations', loadChildren:
      () => import('./features/reservation/reservation.module')
        .then(m => m.ReservationModule)
  },
  { path : "home", component : HomeComponent},
  { path : "menuDetails/:id", component : MenuDetailsComponent},
  { path : "", redirectTo : "/home", pathMatch : "full"},
  { path : "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
