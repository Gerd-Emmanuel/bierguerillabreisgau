import {Component, OnInit} from '@angular/core';
import {Member} from "../../shared/model/member.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectMember} from "../../state/app.selector";

@Component({
  selector: 'bgb-membership',
  templateUrl: './bgb-membership.component.html',
  styleUrls: ['./bgb-membership.component.scss']
})
export class BgbMembershipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
