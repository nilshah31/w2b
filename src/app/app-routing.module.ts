import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PlansAndPriceComponent } from './plans-and-price/plans-and-price.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurdService as AuthGuard } from './auth-gaurd.service';
import { UserDashboardComponent } from './dashboard-componuts/user-dashboard/user-dashboard.component'
import { UserHomeComponent } from './dashboard-componuts/user-home/user-home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'howitworks', component: HowItWorksComponent  },
  { path: 'plansandprice', component: PlansAndPriceComponent  },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard], 
    children: [
    { path: '',component: UserDashboardComponent },
    { path: 'home',component: UserHomeComponent  },
    { path: 'about-us',component: DashboardComponent },
    { path: 'your-services',component: DashboardComponent },
    { path: 'your-team',component: DashboardComponent },
    { path: 'contactus',component: DashboardComponent }
  ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
