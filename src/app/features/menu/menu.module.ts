import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddMenuComponent
  ],
    imports: [
        CommonModule,
        MenuRoutingModule,
        ReactiveFormsModule
    ]
})
export class MenuModule { }
