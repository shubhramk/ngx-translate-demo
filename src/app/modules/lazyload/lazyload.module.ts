import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadRoutingModule } from './lazyload-routing.module';
import {FnTranslateModule, FnTranslateLoaderModule, FnTransLateLoaderService } from 'src/app/foundation/translate';
import { LazyLoadComponent } from './lazyload/lazyload.component';
export const MODULE_LANGUAGE_CODE = 'LAZYLOAD';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadRoutingModule,
    FnTranslateModule.forChild(),
    FnTranslateLoaderModule
  ],
  declarations: [LazyLoadComponent],
})
export class LazyLoadModule {
  constructor(private transLoader: FnTransLateLoaderService) {
    this.transLoader.changeLanguage.subscribe((language: string) => {
      this.transLoader.loadTranslation(MODULE_LANGUAGE_CODE, language);
    });
    this.transLoader.loadTranslation(MODULE_LANGUAGE_CODE);
  }
}
