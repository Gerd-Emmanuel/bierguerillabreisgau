import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bgb-navigation',
  templateUrl: './bgb-navigation.component.html',
  styleUrls: ['./bgb-navigation.component.scss']
})
export class BgbNavigationComponent implements OnInit {
  @Input() bigBackground?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
