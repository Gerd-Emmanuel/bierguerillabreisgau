import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  setIsMobile(isMobile: boolean) {
    localStorage.setItem('isMobile', isMobile.toString());
  }

  setIsDarkmode(isDarkmode: boolean) {
    localStorage.setItem('isDarkmode', isDarkmode.toString());
  }

  getIsMobile(): boolean {
    return Boolean(JSON.parse(localStorage.getItem('isMobile') || "false"));
  }

  getIsDarkmode(): boolean {
    return Boolean(JSON.parse(localStorage.getItem('isDarkmode') || "false"));
  }


}
