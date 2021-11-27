import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {News} from "../model/news.model";
import {HttpClient} from "@angular/common/http";
import {Member} from "../model/member.model";
import {CardModel} from "../model/membercard.model";
import {ShopItem} from "../model/shopitem.model";

@Injectable({
  providedIn: 'root'
})
export class DataServices {

  constructor(private http: HttpClient) {
  }

  getMember(): Observable<CardModel[]> {
    return this.http
      .get<Member[]>("api/v1/member")
      .pipe(
        catchError(this.handleError<Member[]>('member', [])),
        map(res =>
          res.map(member => ({
            thumbImage: member.url,
            alt: "",
            title: member.name + " - \n \n" + member.job
          })))
      );
  }

  getNews(): Observable<News[]> {
    return this.http
      .get<News[]>("api/v1/news")
      .pipe(
        catchError(this.handleError<News[]>('news', []))
      );
  }

  getShopItems(): Observable<ShopItem[]> {
    return this.http
      .get<ShopItem[]>("api/v1/shopitems")
      .pipe(
        catchError(this.handleError<ShopItem[]>('shopitems', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }

}
