import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Menu} from "../../Models/Menu";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  path : string = " http://localhost:3000/menu"
  constructor(private http : HttpClient) { }

  addMenu(menu : Menu) {
    return this.http.post<Menu>(this.path, menu);
  }

  getAllMenu() : Observable<Menu[]> {
    return this.http.get<Menu[]>(this.path)
  }

  getById(id : any) : Observable<Menu> {
    return this.http.get<Menu>(this.path+"?id="+id)
  }

  updateMenu(id : any, menu : Menu) : Observable<Menu> {
    return this.http.put<Menu>(this.path+`/${id}`, menu)
  }
}
