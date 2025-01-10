import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { ContentService } from '../content.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html'
})
export class MapComponent {
  constructor(public contentService: ContentService) { }
  mapHeight = 0.8 * window.innerHeight;
  month$ = this.contentService.index$.pipe(map(index => this.getMonthName(index)));
  iframe$ = combineLatest([
    this.contentService.index$,
    this.contentService.option$
  ]).pipe(map(([index, option]) => this.contentService.loadIframeContent(index, option)));

  getMonthName(index: number): string {
    const months = [
      'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
      'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
    ];
    return months[index - 1];
  }
}
