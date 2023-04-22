import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';
import { Error404Component } from './PAGES/error404/error404.component';
import { CarrersComponent } from './PAGES/carrers/carrers.component';
import { ContactusComponent } from './PAGES/contactus/contactus.component';
import { PricingComponent } from './PAGES/pricing/pricing.component';
import { TermsnconditionsComponent } from './PAGES/termsnconditions/termsnconditions.component';
import { PrivacypolicyComponent } from './PAGES/privacypolicy/privacypolicy.component';
import { ServicesComponent } from './PAGES/services/services.component';
import { DesigningComponent } from './PAGES/designing/designing.component';
import { WebDevelopmentComponent } from './PAGES/web-development/web-development.component';
import { DataAnalystComponent } from './PAGES/data-analyst/data-analyst.component';
import { SeoContentComponent } from './PAGES/seo-content/seo-content.component';

const routes: Routes = [
 {
  path: '',
  component: HomepageComponent
 },
 {
  path: 'about-us',
  component: AboutusComponent
 },
 {
  path: 'carrers',
  component: CarrersComponent
 },
 {
  path: 'contact-us',
  component: ContactusComponent
 },
 {
  path: 'pricing',
  component: PricingComponent
 },
 {
  path: 'terms-and-conditions',
  component: TermsnconditionsComponent
 },
 {
  path: 'privacy-policy',
  component: PrivacypolicyComponent
 },
 {
  path: 'services',
  component: ServicesComponent
 },
 { 
  path: 'services/designing',
  component: DesigningComponent
 },
 {
  path: 'services/web-development',
  component: WebDevelopmentComponent
 },
 {
  path: 'services/data-analyst',
  component: DataAnalystComponent
 },
 {
  path: 'services/seo-content',
  component: SeoContentComponent
 },
 {
  path: '**',
  component: Error404Component
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
