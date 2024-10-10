import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langKey = 'appLanguage';

  constructor() { }

  setLanguage(lang: string) {
    localStorage.setItem(this.langKey, lang);
  }

  getLanguage(): string | null {
    return localStorage.getItem(this.langKey);
  }
}
