import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { HeaderComponent } from './PAGES/header/header.component';
import { FooterComponent } from './PAGES/footer/footer.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';
import { PrivacypolicyComponent } from './PAGES/privacypolicy/privacypolicy.component';
import { CarrersComponent } from './PAGES/carrers/carrers.component';
import { Error404Component } from './PAGES/error404/error404.component';
import { ContactusComponent } from './PAGES/contactus/contactus.component';
import { PricingComponent } from './PAGES/pricing/pricing.component';
import { TermsnconditionsComponent } from './PAGES/termsnconditions/termsnconditions.component';
import { ServicesComponent } from './PAGES/services/services.component';
import { DesigningComponent } from './PAGES/designing/designing.component';
import { WebDevelopmentComponent } from './PAGES/web-development/web-development.component';
import { DataAnalystComponent } from './PAGES/data-analyst/data-analyst.component';
import { SeoContentComponent } from './PAGES/seo-content/seo-content.component';
import { WorksComponent } from './PAGES/works/works.component';
import { ReachUsComponent } from './COMPONENT/reach-us/reach-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    CarrersComponent,
    Error404Component,
    ContactusComponent,
    PricingComponent,
    TermsnconditionsComponent,
    ServicesComponent,
    DesigningComponent,
    WebDevelopmentComponent,
    DataAnalystComponent,
    SeoContentComponent,
    WorksComponent,
    ReachUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
