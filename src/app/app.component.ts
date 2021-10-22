import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-website';

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('de');
  }

  isActive(): boolean {
    return this.router.url.split("/")[1] === '';
  }
}
