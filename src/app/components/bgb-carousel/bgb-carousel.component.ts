import {Component, OnInit} from '@angular/core';
import {CardModel} from "../../shared/model/membercard.model";

@Component({
  selector: 'bgb-carousel',
  templateUrl: './bgb-carousel.component.html',
  styleUrls: ['./bgb-carousel.component.scss']
})
export class BgbCarouselComponent implements OnInit {
  members2: Array<CardModel> = [
    {
      image: "./assets/images/member/dirk.jpg",
      thumbImage: "./assets/images/member/dirk.jpg",
      title: 'Dirk Schnaiter - Schriftführer und Finanzminister'
    },
    {
      image: "./assets/images/member/daniel.jpg",
      thumbImage: "./assets/images/member/daniel.jpg",
      title: "Daniel Reisinger - 1. Vorstand"
    },
    {
      image: "./assets/images/member/florian.jpg",
      thumbImage: "./assets/images/member/florian.jpg",
      title: "Florian Mut - Minister für Spezial-Projekte"
    },
    {
      image: "./assets/images/member/andi.jpg",
      thumbImage: "./assets/images/member/andi.jpg",
      title: "Andreas Schnaiter - 2. Vorstand"
    },
    {
      image: "./assets/images/member/stefanf.jpg",
      thumbImage: "./assets/images/member/stefanf.jpg",
      title: "Stefan Fischer - Beisitzer und Frauen-Beauftragter"
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Wolfgang Brunner - Beisitzer und Ministerium für Medien"
    },
    {
      image: "./assets/images/member/sonja.jpg",
      thumbImage: "./assets/images/member/sonja.jpg",
      title: "Sonja Eisenegger - Auslandsministerin + Social Media"
    },
    {
      image: "./assets/images/member/stefanm.jpg",
      thumbImage: "./assets/images/member/stefanm.jpg",
      title: "Stefan Menner -Sergeant of arms + Ministerium für Aq"
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Mareike Lorenz - Feiertagsministerin",
    },
    {
      image: "./assets/images/member/frieder.jpg",
      thumbImage: "./assets/images/member/frieder.jpg",
      title: "Frieder Laupe - Justizminister",
    },
    {
      image: "./assets/images/member/bolze.jpg",
      thumbImage: "./assets/images/member/bolze.jpg",
      title: "Daniel Bolze - Pöbel-Minister & Mr. Super-Sling",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Martin Buttenmüller - Bauministerium",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Emilia Schneiter - Jugend",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Jacques Moser - Alterspräsident",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Kai Siebold - Harte-Sprirituosen Minister",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Patrick Eisenegger - Drogen Beauftragter",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Peter Dengler - Sponsoring",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Bladimir Gonzalez - Nikolaus",
    },
    {
      image: "./assets/images/member/gerd.jpg",
      thumbImage: "./assets/images/member/gerd.jpg",
      title: "Gerd-Emmanuel Nandzik - Homepage",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Daniel Weiß - Bier Minister",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Nils Brunner - Jugendbeauftragter",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Robert Welsch",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Markus Mut - Familienministerium",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Colin Mut - Familienministerium",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Isabell Mut - Familienministerium",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Pawel Luska - Ministerium für Diverses",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Sven-Uwe Günther - Schnaps-Beauftragter",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Philipp Keller - Gesang",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Rita Lehmann - Hygiene Beauftragte",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Stefanie Reisinger",
    },
    {
      image: "./assets/images/member/default.png",
      thumbImage: "./assets/images/member/default.png",
      title: "Lukas Wunderle",
    },
  ]

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

}
