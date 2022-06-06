import {Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {StorageService} from "./shared/services/storage.service";
import {AppState} from "./state/app.state";
import {Store} from "@ngrx/store";
import {initData, loadMember} from "./state/app.actions";
import {ApiService} from "./shared/services/data-services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-website';

  constructor(private translate: TranslateService, private router: Router,
              private dataService: ApiService,
              private storageService: StorageService, private store: Store<AppState>) {

    this.store.dispatch(initData())
    this.storageService.setIsDarkmode(false);
    this.storageService.setIsMobile(window.innerWidth < 768);
    translate.setDefaultLang('de');
  }


  isActive(): boolean {
    return this.router.url.split("/")[1] === '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.storageService.setIsMobile(event.target.innerWidth < 768)
  }

}
