import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {CardModel} from "../../shared/model/membercard.model";
import {StorageService} from "../../shared/services/storage.service";
import {Store} from "@ngrx/store";
import {selectMember} from "../../state/app.selector";
import {catchError, map} from "rxjs/operators";

@Component({
  selector: 'bgb-carousel',
  templateUrl: './bgb-carousel.component.html',
  styleUrls: ['./bgb-carousel.component.scss']
})
export class BgbCarouselComponent implements OnInit {
  members?: Observable<CardModel[]>;

  constructor(private resizeService: StorageService, private store: Store) {
  }

  ngOnInit(): void {
    this.members = this.store.select(selectMember)
      .pipe(
        catchError(() => EMPTY),
        map(res =>
          res.map(member => ({
            thumbImage: member.url,
            alt: "",
            title: member.name + " - \n \n" + member.job
          })))
      );
  }

  amountSlidesScrolling(): number {
    return this.resizeService.getIsMobile() ? 1 : 3;
  }
}
