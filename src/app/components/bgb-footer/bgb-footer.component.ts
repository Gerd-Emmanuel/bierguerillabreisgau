import {Component, Input, OnInit} from '@angular/core';
import {DarkMode} from "../../shared/darkmode.functions";

@Component({
  selector: 'bgb-footer',
  templateUrl: './bgb-footer.component.html',
  styleUrls: ['./bgb-footer.component.scss']
})
export class BgbFooterComponent extends DarkMode implements OnInit {

  @Input() visible?: boolean = true;


  constructor() {
    super();
  }

  ngOnInit(): void {

  }

}
