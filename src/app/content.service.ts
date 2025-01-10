import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    index$ = new BehaviorSubject<number>(1);
    option$ = new BehaviorSubject<string>('routes');

    constructor(private sanitizer: DomSanitizer) { }

    loadIframeContent(index: number, option: string) {
        const url = `assets/${option}/Mapa_Trasy_Rowerowe_Gdansk${index}.html`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}