import {Member} from "../shared/model/member.model";
import {News} from "../shared/model/news.model";
import {ShopItem} from "../shared/model/shopitem.model";

export interface AppState {
  isDarkMode: boolean,
  isDirty: boolean;
  member: ReadonlyArray<Member>;
  news: ReadonlyArray<News>;
  shopItems: ReadonlyArray<ShopItem>;
}

export const initialState: AppState = {
  isDirty: false, isDarkMode: false, member: [], news: [], shopItems: []
}
