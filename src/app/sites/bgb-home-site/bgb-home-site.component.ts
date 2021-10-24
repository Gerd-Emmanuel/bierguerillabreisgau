import {Component, OnInit} from '@angular/core';
import {CardModel} from "../../shared/model/newscard.model";

@Component({
  selector: 'bgb-home-site',
  templateUrl: './bgb-home-site.component.html',
  styleUrls: ['./bgb-home-site.component.scss']
})
export class BgbHomeSiteComponent implements OnInit {

  news: CardModel[] = [
    {
      title: "News",
      newsText: "Hier informieren wir regelmäßig über Spannendes aus unserem Fanclub oder anstehende Ereignisse.",
    },
    {
      title: "Generalversammlung 2021",
      subtitle: "24.10.2021",
      newsText: "Bald ist es wieder Zeit für eine Generalversammlung.",
      imageUrl: "./assets/images/florian.jpg"
    },
    {
      title: "Neues Stadion",
      subtitle: "16.10.2021",
      newsText: "Das neue Stadion wird mit einem Heimsieg eingeweiht."
    },
    {
      title: "Neues Stadion",
      subtitle: "01.06.2021",
      newsText: "(Langes) Warten auf das erste Heimspiel im neuen Stadion."
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
