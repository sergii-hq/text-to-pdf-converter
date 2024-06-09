import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormFieldsCounterService {
  private count = 0;

  getCount(): number {
    this.count += 1;
    return this.count;
  }
}
