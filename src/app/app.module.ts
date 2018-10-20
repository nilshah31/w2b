import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PlansAndPriceComponent } from './plans-and-price/plans-and-price.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './dashboard-componuts/about-us/about-us.component';
import { YourServicesComponent } from './dashboard-componuts/your-services/your-services.component';
import { YourTeamComponent } from './dashboard-componuts/your-team/your-team.component';
import { ContactUsComponent } from './dashboard-componuts/contact-us/contact-us.component';
import { BlogsComponent } from './dashboard-componuts/blogs/blogs.component';
import { UserComponent } from './dashboard-componuts/user/user.component';
import { AnalyticsComponent } from './dashboard-componuts/analytics/analytics.component';
import { SidebarComponent } from './dashboard-componuts/sidebar/sidebar.component';
import { NavbarComponent } from './dashboard-componuts/navbar/navbar.component';
import { UserDashboardComponent  } from './dashboard-componuts/user-dashboard/user-dashboard.component';
import { UserHomeComponent  } from './dashboard-componuts/user-home/user-home.component';
import { DataServiceService } from './data-service.service'
import { UserService } from './shared/services/user/user.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksComponent,
    PlansAndPriceComponent,
    FaqComponent,
    ContactComponent,
    DashboardComponent,
    TopNavBarComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    YourServicesComponent,
    YourTeamComponent,
    ContactUsComponent,
    BlogsComponent,
    UserComponent,
    AnalyticsComponent,
    SidebarComponent,
    NavbarComponent,
    UserDashboardComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
