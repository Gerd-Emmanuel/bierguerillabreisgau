import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "./app.state";

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectMember = createSelector(selectAppState, state => state.member);
export const selectNews = createSelector(selectAppState, state => state.news);
export const selectShopItems = createSelector(selectAppState, state => state.shopItems);
