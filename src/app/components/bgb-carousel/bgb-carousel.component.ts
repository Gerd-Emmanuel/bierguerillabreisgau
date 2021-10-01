import {Component, OnInit} from '@angular/core';
import {MembercardModel, MembercardModel2} from "../../shared/model/membercard.model";

@Component({
  selector: 'bgb-carousel',
  templateUrl: './bgb-carousel.component.html',
  styleUrls: ['./bgb-carousel.component.scss']
})
export class BgbCarouselComponent implements OnInit {
  members2: MembercardModel2[] = [
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

  members: MembercardModel[] = [
    {url: "./assets/images/florian.jpg", name: "Florian Mut", title: "Minister für Spezial-Projekte"},
    {url: "./assets/images/andi.jpg", name: "Andreas Schnaiter", title: "2. Vorstand"},
    {url: "./assets/images/andi.jpg", name: "Dirk Schnaiter", title: "Schriftführer und Finanzminister"},
    {url: "./assets/images/andi.jpg", name: "Heike Schneider", title: "Beisitzerin und Niveau-Beauftragte"},
    {url: "./assets/images/andi.jpg", name: "Daniel Reisinger", title: "1. Vorstand"},
    {url: "./assets/images/andi.jpg", name: "Stefan Fischer", title: "Beisitzer und Frauen-Beauftragter"},
    {url: "./assets/images/andi.jpg", name: "Jonny Brunner", title: "Beisitzer, Minister für Medien und Merchandising"},
    {url: "./assets/images/andi.jpg", name: "Alexandra Garber", title: "Bier-Ministerin"},
    {url: "./assets/images/andi.jpg", name: "Till Meißner", title: "Hauptstadt-Korrespondent"},
    {url: "./assets/images/andi.jpg", name: "Sonja Eisenegger", title: "Auslandsministerin"},
    // {url: "./assets/images/andi.jpg", name: "Stefan Menner", title: "Sergeant at arms"},
    // {url: "./assets/images/andi.jpg", name: "Frank Hüfner", title: "Ethik-Kommision"},
    // {url: "./assets/images/andi.jpg", name: "Mareike Lorenz", title: "Event-Managerin"},
    // {url: "./assets/images/andi.jpg", name: "Frieder Lauppe", title: "Justizminister"},
    // {url: "./assets/images/andi.jpg", name: "Daniel Bolze", title: "Pöbel-Minister und Mr. Super-Sling"},
    // {url: "./assets/images/andi.jpg", name: "Martin Buttenmüller", title: "Bauminister"},
  ]

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

}
