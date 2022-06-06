import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ApiService} from "../shared/services/data-services.service";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {
  initData,
  loadMember,
  loadMemberSuccess,
  loadNews,
  loadNewsSuccess,
  loadShopItems,
  loadShopItemsSuccess
} from "./app.actions";

@Injectable()
export class AppEffects {

  initData = createEffect(() => this.actions.pipe(
      ofType(initData),
      switchMap(() => ([loadMember(), loadShopItems(), loadNews()]))
    )
  );

  loadMember = createEffect(() => this.actions.pipe(
      ofType(loadMember),
      mergeMap(() => this.dataServices.getMember2()
        .pipe(
          map(member => loadMemberSuccess({member})),
          catchError(() => EMPTY)
        ))
    )
  );

  loadNews = createEffect(() => this.actions.pipe(
      ofType(loadNews),
      mergeMap(() => this.dataServices.getNews()
        .pipe(
          map(news => loadNewsSuccess({news})),
          catchError(() => EMPTY)
        ))
    )
  );

  loadShopItems = createEffect(() => this.actions.pipe(
      ofType(loadShopItems),
      mergeMap(() => this.dataServices.getShopItems()
        .pipe(
          map(shopItems => loadShopItemsSuccess({shopItems})),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions: Actions,
    private dataServices: ApiService
  ) {
  }
}
