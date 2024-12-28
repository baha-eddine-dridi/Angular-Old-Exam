import {Component, Input} from '@angular/core';
import {Menu} from "../../Models/Menu";
import {MenuService} from "../../services/MenuService/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() menu! : Menu
  constructor(private menuService : MenuService) {
  }

  reserver() {
    this.menu.reservations.push(1)
    this.menuService.updateMenu(this.menu.id, this.menu).subscribe({
      next : (data) => console.log("user added"),
      error : (err) => console.log(err)
    })
  }
}
