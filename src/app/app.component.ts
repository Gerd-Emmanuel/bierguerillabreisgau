import {Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {StorageService} from "./shared/services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-website';

  constructor(private translate: TranslateService, private router: Router,
              private resizeService: StorageService) {
    this.resizeService.setIsDarkmode(false);
    this.resizeService.setIsMobile(window.innerWidth < 768);
    translate.setDefaultLang('de');
  }


  isActive(): boolean {
    return this.router.url.split("/")[1] === '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.resizeService.setIsMobile(event.target.innerWidth < 768)
  }

}
