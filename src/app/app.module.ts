import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FnTranslateLoaderModule, FnTransLateLoaderService } from './foundation/translate';
export const MODULE_LANGUAGE_CODE = 'APP';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        FnTranslateLoaderModule.forRoot(),
        HeaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(private transLoader: FnTransLateLoaderService) {
        this.transLoader.changeLanguage.subscribe((language: string) => {
            this.transLoader.loadTranslation(MODULE_LANGUAGE_CODE, language);
        });
        this.transLoader.loadTranslation(MODULE_LANGUAGE_CODE);
    }

}


