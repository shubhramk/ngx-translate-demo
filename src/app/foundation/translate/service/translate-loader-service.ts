/**
 * TransLoader Service
 * Service to manage translation globally
 */

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export const DEFAULT_LANGUAGE = 'en';

@Injectable()
export class FnTransLateLoaderService {

  private selectedLanguage: string = DEFAULT_LANGUAGE;
  public changeLanguage: Subject<string> = new Subject();

  constructor(
    private translate: TranslateService,
    private http: HttpClient) {

    this.translate.setDefaultLang(DEFAULT_LANGUAGE);
    this.translate.use(DEFAULT_LANGUAGE);

    this.changeLanguage.subscribe((language: string) => {
      this.translate.use(language);
      this.selectedLanguage = language;
    });
  }

  /**
   * Load Module Specific Translation
   * @param code unique module code to load translation.
   * @param language language code example en , de.
   */
  public loadTranslation(code: string, language: string = DEFAULT_LANGUAGE) {
    let PATH = '';
    switch (code) {
      case 'LAZYLOAD':
        PATH = `./assets/i18n/lazyload/${language}.json`;
        break;
      case 'HEADER':
        PATH = `./assets/i18n/header/${language}.json`;
        break;
      case 'APP':
        PATH = `./assets/i18n/${language}.json`;
        break;
    }
    if (PATH) {
      this.http.get(PATH)
        .subscribe((json: Object) => {
          this.translate.setTranslation(language, json, true);
        });
    }
  }

  /**
   * Set Language
   * @param language language code example en , de.
   */
  public setLanguage(language: string = DEFAULT_LANGUAGE) {
    this.changeLanguage.next(language);
  }
}
