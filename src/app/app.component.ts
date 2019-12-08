import { Component } from '@angular/core';
import { FnTransLateLoaderService } from './foundation/translate';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private transLoader: FnTransLateLoaderService) {}

    public useLanguage(language: string) {
        this.transLoader.setLanguage(language);
    }

}
