import { Component } from '@angular/core';
import {Menu} from "../../Models/Menu";
import {MenuService} from "../../services/MenuService/menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  approvedMenuList! : Menu[];
  constructor(private menuService : MenuService) {
    this.menuService.getAllMenu().subscribe({
      next : data => this.approvedMenuList = data.filter((menu) => menu.approved),
      error : err => console.error(err)
    })
  }
}
