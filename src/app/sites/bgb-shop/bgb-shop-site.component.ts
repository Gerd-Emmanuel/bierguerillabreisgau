import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ShopItem} from "../../shared/model/shopitem.model";
import {DataServices} from "../../shared/services/data-services.service";

@Component({
  selector: 'bgb-shop-site',
  templateUrl: './bgb-shop-site.component.html',
  styleUrls: ['./bgb-shop-site.component.scss']
})
export class BgbShopSiteComponent implements OnInit {
  shopItems?: Observable<ShopItem[]>;

  constructor(private dataServices: DataServices) {
  }

  ngOnInit(): void {
    this.shopItems = this.dataServices.getShopItems();
  }

}
