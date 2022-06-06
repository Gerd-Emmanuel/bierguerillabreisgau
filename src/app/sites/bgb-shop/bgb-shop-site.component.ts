import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ShopItem} from "../../shared/model/shopitem.model";
import {Store} from "@ngrx/store";
import {selectShopItems} from "../../state/app.selector";

@Component({
  selector: 'bgb-shop-site',
  templateUrl: './bgb-shop-site.component.html',
  styleUrls: ['./bgb-shop-site.component.scss']
})
export class BgbShopSiteComponent implements OnInit {
  shopItems?: Observable<ReadonlyArray<ShopItem>>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.shopItems = this.store.select(selectShopItems);
  }

}
