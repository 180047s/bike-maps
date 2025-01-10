import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'map-navigation',
  templateUrl: './map-navigation.component.html'
})
export class MapNavigationComponent {
  defaultSelection: string = 'routes';
  options = [
    { value: 'routes', viewValue: 'Trasy' },
    { value: 'heatmaps', viewValue: 'Heatmapy' },
    { value: 'clusters', viewValue: 'Klastry' }
  ];

  constructor(public contentService: ContentService) { }

  onPreviousClick() {
    const newIndex = this.contentService.index$.value - 1;
    this.contentService.index$.next(newIndex < 1 ? 12 : newIndex);
  }

  onNextClick() {
    const newIndex = this.contentService.index$.value + 1;
    this.contentService.index$.next(newIndex > 12 ? 1 : newIndex);
  }

  onOptionChange(option: MatOptionSelectionChange<string>) {
    if(option.isUserInput) {
      this.contentService.option$.next(option.source.value);
    }
  }
}
