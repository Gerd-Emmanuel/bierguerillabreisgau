import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bgb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() bigBackground?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
