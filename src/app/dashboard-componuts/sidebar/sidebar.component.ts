import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activeDashboardMenu : string;
  dashboardMenuItems  = {};
  constructor(private dataService:DataServiceService) {
    this.dashboardMenuItems = [
      {'value':'dashboard/'              ,'title':'Dashboard'},
      {'value':'dashboard/home'          ,'title':'Home'},
      {'value':'dashboard/about-us'      ,'title':'About Us'},
      {'value':'dashboard/your-services' ,'title':'Your Services'},
      {'value':'dashboard/your-team'     ,'title':'Your Team'},
      {'value':'dashboard/contactus'     ,'title':'Contact US'},
      {'value':'dashboard/user'          ,'title':'Manage Your Blogs'},
      {'value':''                        ,'title':'Go Back'}
    ]
  }

  ngOnInit() {
    this.activeDashboardMenu = 'dashboard/';
    // this.activeDashboardMenu = this.dataService.getActiveMenu()
  }

}
