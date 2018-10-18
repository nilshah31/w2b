import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public activeMenu : string;
  constructor(private router:Router) {
    this.activeMenu = router.url.toString().substr(1)!==''?router.url.toString().substr(1):'';
  }
  getActiveMenu(){
    return this.activeMenu;
  }
  setActiveMenu(newActiveMenu){
    this.activeMenu = newActiveMenu;
  }
}
