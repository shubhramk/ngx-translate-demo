import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FnTranslateModule , FnTransLateLoaderService, FnTranslateLoaderModule } from 'src/app/foundation/translate';
export const MODULE_LANGUAGE_CODE = 'HEADER';

@NgModule({
  declarations: [HeaderComponentComponent],
  imports: [
    CommonModule,
    FnTranslateModule.forChild(),
    FnTranslateLoaderModule
  ],
  exports: [
    HeaderComponentComponent
  ]
})
export class HeaderModule {
  constructor(private translate: FnTransLateLoaderService) {
    this.translate.changeLanguage.subscribe((language: string) => {
      this.translate.loadTranslation(MODULE_LANGUAGE_CODE, language);
    });
    this.translate.loadTranslation(MODULE_LANGUAGE_CODE);
  }
}