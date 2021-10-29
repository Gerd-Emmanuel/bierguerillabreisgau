import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bgb-footer',
  templateUrl: './bgb-footer.component.html',
  styleUrls: ['./bgb-footer.component.scss']
})
export class BgbFooterComponent implements OnInit {

  @Input() visible?: boolean = true;
  darkMode?: boolean;

  constructor() {
    this.darkMode = Boolean(localStorage.getItem('darkmode'));
    console.log("footer " + localStorage.getItem('darkmode'))
  }

  ngOnInit(): void {

  }

  toggleDarkmode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkmode', this.darkMode.toString());
    console.log("toggle " + localStorage.getItem('darkmode'))
  }

}
