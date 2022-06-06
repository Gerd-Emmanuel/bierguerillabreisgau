import {createReducer, on} from "@ngrx/store";
import {
  loadMember,
  loadMemberSuccess,
  loadNews,
  loadNewsSuccess,
  loadShopItems,
  loadShopItemsSuccess
} from "./app.actions";
import {AppState, initialState} from "./app.state";

export const appReducer = createReducer(
  initialState,
  on(loadMember, (state: AppState = initialState) => ({...state, isDirty: true})),
  on(loadMemberSuccess, (state: AppState = initialState, {member}) => ({...state, member, isDirty: false})),
  on(loadNews, (state: AppState = initialState) => ({...state, isDirty: false})),
  on(loadNewsSuccess, (state: AppState = initialState, {news}) => ({...state, news, isDirty: false})),
  on(loadShopItems, (state: AppState = initialState) => ({...state, isDirty: false})),
  on(loadShopItemsSuccess, (state: AppState = initialState, {shopItems}) => ({...state, shopItems, isDirty: false})),
)
