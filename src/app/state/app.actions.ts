import {createAction, props} from "@ngrx/store";
import {Member} from "../shared/model/member.model";
import {News} from "../shared/model/news.model";
import {ShopItem} from "../shared/model/shopitem.model";

export const initData = createAction(
  '[Init] Load data'
);

export const loadMember = createAction(
  '[Member] Load member'
);

export const loadMemberSuccess = createAction(
  '[Member] Load member success',
  props<{ member: ReadonlyArray<Member> }>()
);

export const loadNews = createAction(
  '[News] Load news'
);

export const loadNewsSuccess = createAction(
  '[News] Load news success',
  props<{ news: ReadonlyArray<News> }>()
);

export const loadShopItems = createAction(
  '[ShopItems] Load shopitems'
);

export const loadShopItemsSuccess = createAction(
  '[ShopItems] Load shopitems success',
  props<{ shopItems: ReadonlyArray<ShopItem> }>()
);
