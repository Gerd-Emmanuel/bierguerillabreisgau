import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BgbHomeSiteComponent} from "../sites/bgb-home-site/bgb-home-site.component";
import {BgbMembershipComponent} from "../sites/bgb-membership/bgb-membership.component";
import {BgbEventsSiteComponent} from "../sites/bgb-events/bgb-events-site.component";
import {BgbShopSiteComponent} from "../sites/bgb-shop/bgb-shop-site.component";
import {BgbSchwimmnudelnComponent} from "../sites/bgb-schwimmnudeln/bgb-schwimmnudeln.component";
import {BgbContactComponent} from "../sites/bgb-contact/bgb-contact.component";


const routes: Routes = [
  {path: 'home', component: BgbHomeSiteComponent},
  {path: 'membership', component: BgbMembershipComponent},
  {path: 'events', component: BgbEventsSiteComponent},
  {path: 'images', component: BgbMembershipComponent},
  {path: 'shop', component: BgbShopSiteComponent},
  {path: 'schwimmnudeln', component: BgbSchwimmnudelnComponent},
  {path: 'contact', component: BgbContactComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
