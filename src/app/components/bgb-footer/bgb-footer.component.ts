import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bgb-footer',
  templateUrl: './bgb-footer.component.html',
  styleUrls: ['./bgb-footer.component.scss']
})
export class BgbFooterComponent implements OnInit {

  @Input() visible?: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
