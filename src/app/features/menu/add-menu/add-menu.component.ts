import { Component } from '@angular/core';
import {Menu} from "../../../Models/Menu";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MenuService} from "../../../services/MenuService/menu.service";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css'
})
export class AddMenuComponent {
  newMenu! : FormGroup;
  constructor(private fb : FormBuilder, private menuService : MenuService) {
    this.newMenu = this.fb.group({
      title : ["", [Validators.required]],
      description : ["", [Validators.required, Validators.minLength(10)]],
    })
  }

  addNewMenu() {
    const newMenu: Menu = {
      id : 0,
      title: this.newMenu.value.title,
      image: 'assets/images/food.jpg',
      description: this.newMenu.value.description,
      mark: 0,
      approved: false,
      reservations: []
    };
    this.menuService.addMenu(newMenu).subscribe({
      next : (data) => console.log("added"),
      error : (err) => console.error(err)
    })
  }
}
