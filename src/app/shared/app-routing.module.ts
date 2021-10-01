import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BgbHomeSiteComponent} from "../sites/bgb-home-site/bgb-home-site.component";
import {BgbMembershipComponent} from "../sites/bgb-membership/bgb-membership.component";


const routes: Routes = [
  {path: 'home', component: BgbHomeSiteComponent},
  {path: 'membership', component: BgbMembershipComponent},
  {path: 'events', component: BgbMembershipComponent},
  {path: 'images', component: BgbMembershipComponent},
  {path: 'shop', component: BgbMembershipComponent},
  {path: 'schwimmnudeln', component: BgbMembershipComponent},
  {path: 'contact', component: BgbMembershipComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
