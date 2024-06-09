import { TestBed } from '@angular/core/testing';

import { FormFieldsCounterService } from './form-fields-counter.service';

describe('FormFieldsCounterService', () => {
  let service: FormFieldsCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFieldsCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
