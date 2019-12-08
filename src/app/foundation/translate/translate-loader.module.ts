/**
 * TransLoader Module
 * Module to share Translate Service globally
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FnTransLateLoaderService } from './service/translate-loader-service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class FnTranslateLoaderModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FnTranslateLoaderModule,
      providers: [FnTransLateLoaderService]
    }
  }
}

export {FnTransLateLoaderService}