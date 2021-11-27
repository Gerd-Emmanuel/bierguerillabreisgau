import {Component, OnInit} from '@angular/core';
import {DataServices} from "../../shared/services/data-services.service";
import {News} from "../../shared/model/news.model";
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: 'bgb-home-site',
  templateUrl: './bgb-home-site.component.html',
  styleUrls: ['./bgb-home-site.component.scss']
})
export class BgbHomeSiteComponent implements OnInit {

  news?: Observable<News[]>;

  constructor(private dataServices: DataServices) {
  }

  ngOnInit(): void {
    this.news = this.dataServices.getNews();
  }

}
