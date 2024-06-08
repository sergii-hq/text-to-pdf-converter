import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-converter-page',
  templateUrl: './text-converter-page.component.html',
  styleUrls: ['./text-converter-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextConverterPageComponent {}
