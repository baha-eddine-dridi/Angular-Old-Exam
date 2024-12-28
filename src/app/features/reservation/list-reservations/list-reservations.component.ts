import { Component } from '@angular/core';
import {Menu} from "../../../Models/Menu";
import {MenuService} from "../../../services/MenuService/menu.service";

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrl: './list-reservations.component.css'
})
export class ListReservationsComponent {
  myReservations! : Menu[];
  constructor(private menuService : MenuService) {
    this.menuService.getAllMenu().subscribe({
      next : data => {
        this.myReservations = data.filter((menu) => menu.reservations.includes(1))
      },
      error : err => console.error(err)
    })
  }
}
