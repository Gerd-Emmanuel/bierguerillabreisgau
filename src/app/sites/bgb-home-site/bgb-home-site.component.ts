import {Component, OnInit} from '@angular/core';
import {News} from "../../shared/model/news.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectNews} from "../../state/app.selector";

@Component({
  selector: 'bgb-home-site',
  templateUrl: './bgb-home-site.component.html',
  styleUrls: ['./bgb-home-site.component.scss']
})
export class BgbHomeSiteComponent implements OnInit {

  news?: Observable<ReadonlyArray<News>>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.news = this.store.select(selectNews);
  }

}
