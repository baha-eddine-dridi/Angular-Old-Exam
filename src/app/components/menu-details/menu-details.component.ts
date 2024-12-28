import { Component } from '@angular/core';
import {Menu} from "../../Models/Menu";
import {MenuService} from "../../services/MenuService/menu.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.css'
})
export class MenuDetailsComponent {
  menu! : Menu;
  id!: any;
  newMark! : any;
  constructor(private menuService : MenuService, private ar : ActivatedRoute) {
    this.id = this.ar.snapshot.paramMap.get('id')
    if (this.id) {
      this.menuService.getById(this.id).subscribe({
        next: (data) => {
          console.log(data);
          if (Array.isArray(data)) {
            this.menu = data[0];
          } else {
            this.menu = data;
          }
        },
        error: (err) => console.error(err)
      });
    }
  }

  noter() {
    if (this.menu.mark == 0)
      this.menu.mark = this.newMark
    else {
      this.menu.mark = (this.menu.mark + this.newMark)/2;
    }
    this.menuService.updateMenu(this.id, this.menu).subscribe({
      next : data => console.log("updated"),
      error : (err) => console.error(err)
    })
  }
}
