import {Component, Input, OnInit} from '@angular/core';
import {DarkMode} from "../../shared/darkmode.functions";

@Component({
  selector: 'bgb-navigation',
  templateUrl: './bgb-navigation.component.html',
  styleUrls: ['./bgb-navigation.component.scss']
})
export class BgbNavigationComponent extends DarkMode implements OnInit {
  @Input() bigBackground?: boolean = false;


  ngOnInit(): void {
  }
}
