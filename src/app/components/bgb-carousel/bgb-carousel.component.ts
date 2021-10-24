import {Component, OnInit} from '@angular/core';
import {CardModel} from "../../shared/model/membercard.model";

@Component({
  selector: 'bgb-carousel',
  templateUrl: './bgb-carousel.component.html',
  styleUrls: ['./bgb-carousel.component.scss']
})
export class BgbCarouselComponent implements OnInit {
  members2: CardModel[] = [
    {
      image: "./assets/images/florian.jpg",
      thumbImage: "./assets/images/florian.jpg",
      title: "Florian Mut",
      alt: "Minister für Spezial-Projekte"
    },
    {
      image: "./assets/images/andi.jpg",
      thumbImage: "./assets/images/andi.jpg",
      title: "Andreas Schnaiter",
      alt: "2. Vorstand"
    },
    {
      image: "./assets/images/andi.jpg",
      thumbImage: "./assets/images/andi.jpg",
      title: "Dirk Schnaiter",
      alt: "Schriftführer und Finanzminister"
    },
    {
      image: "./assets/images/andi.jpg",
      thumbImage: "./assets/images/andi.jpg",
      title: "Heike Schneider",
      alt: "Beisitzerin und Niveau-Beauftragte"
    },
    {
      image: "./assets/images/andi.jpg",
      thumbImage: "./assets/images/andi.jpg",
      title: "Daniel Reisinger",
      alt: "1. Vorstand"
    },
    {
      image: "./assets/images/andi.jpg",
      thumbImage: "./assets/images/andi.jpg",
      title: "Stefan Fischer",
      alt: "Beisitzer und Frauen-Beauftragter"
    },
  ]

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

}
