import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataServices} from "../../shared/services/data-services.service";
import {CardModel} from "../../shared/model/membercard.model";
import {StorageService} from "../../shared/services/storage.service";

@Component({
  selector: 'bgb-carousel',
  templateUrl: './bgb-carousel.component.html',
  styleUrls: ['./bgb-carousel.component.scss']
})
export class BgbCarouselComponent implements OnInit {
  members?: Observable<CardModel[]>;

  constructor(private dataServices: DataServices, private resizeService: StorageService) {
  }

  ngOnInit(): void {
    this.members = this.dataServices.getMember();
  }

  amountSlidesScrolling() : number {
    return this.resizeService.getIsMobile() ? 1 : 3;
  }
}
