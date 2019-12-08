/**
 * Translate Module
 * Module to share @ngx-translate globally
 **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateModule
} from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class FnTranslateModule {
  public static forRoot() {
    return {
      ngModule: FnTranslateModule
    }
  }
  public static forChild() {
    return {
      ngModule: FnTranslateModule
    }
  }
}