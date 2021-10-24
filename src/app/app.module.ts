import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BgbNavigationComponent } from './components/bgb-navigation/bgb-navigation.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './shared/app-routing.module';
import { BgbHomeSiteComponent } from './sites/bgb-home-site/bgb-home-site.component';
import { BgbMembershipComponent } from './sites/bgb-membership/bgb-membership.component';
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { BgbCarouselComponent } from './components/bgb-carousel/bgb-carousel.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import { BgbFooterComponent } from './components/bgb-footer/bgb-footer.component';
import {NgImageSliderModule} from "ng-image-slider";
import {BgbEventsSiteComponent} from "./sites/bgb-events/bgb-events-site.component";
import {BgbShopSiteComponent} from "./sites/bgb-shop/bgb-shop-site.component";
import {MatGridListModule} from "@angular/material/grid-list";
import { BgbSchwimmnudelnComponent } from './sites/bgb-schwimmnudeln/bgb-schwimmnudeln.component';
import { BgbContactComponent } from './sites/bgb-contact/bgb-contact.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    BgbNavigationComponent,
    BgbHomeSiteComponent,
    BgbMembershipComponent,
    BgbCarouselComponent,
    BgbFooterComponent,
    BgbEventsSiteComponent,
    BgbShopSiteComponent,
    BgbSchwimmnudelnComponent,
    BgbContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatTabsModule,
    IvyCarouselModule,
    // ngx-translate and the loader module
    HttpClientModule,
    NgImageSliderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
