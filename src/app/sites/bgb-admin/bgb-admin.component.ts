import {Component, OnInit} from '@angular/core';
import {BgbAuthService} from "../../shared/services/bgb-auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './bgb-admin.component.html',
  styleUrls: ['./bgb-admin.component.scss']
})
export class BgbAdminComponent implements OnInit {
  url: string = "http://localhost:8080/oauth2/authorization/google";

  constructor(private auth: BgbAuthService) {
  }

  ngOnInit(): void {

  }

  login(): void {
    this.auth.login();
  }
  logout(): void {
    this.auth.logout();
  }
}
