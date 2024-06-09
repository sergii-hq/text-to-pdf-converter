import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormFieldsCounterService } from '../../services/form-fields-counter.service';

@Component({
  template: '',
})
export abstract class BaseFieldComponent implements OnInit {
  @Input() label: string;

  @Input() placeholder: string;

  @Input() control: AbstractControl;

  id: string;

  constructor(protected formFieldsCounterService: FormFieldsCounterService) {}

  ngOnInit() {
    this.placeholder ??= '';
    this.id = `field-${this.formFieldsCounterService.getCount()}`;
  }
}
