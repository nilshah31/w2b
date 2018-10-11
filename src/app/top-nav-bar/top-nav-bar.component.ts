import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  activeMenu : string;
  menuData = {};
  constructor(private dataService:DataServiceService) { 
    this.menuData = [
      {'value':'','title':'Home'},
      {'value':'howitworks','title':'How it Works'},
      {'value':'plansandprice','title':'Plans and Price'},
      {'value':'faq','title':'FAQ'},
      {'value':'contact','title':'Contact'}
    ]
  }

  ngOnInit() {
    this.activeMenu = this.dataService.getActiveMenu()
  }

  changeActiveClass(newActiveMenu){
    this.dataService.setActiveMenu(newActiveMenu)
  }
  
}
