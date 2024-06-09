import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaFieldComponent } from './textarea-field.component';
import { SharedModule } from '../../../shared.module';
import { FormControl } from '@angular/forms';

describe('TextareaFieldComponent', () => {
  let component: TextareaFieldComponent;
  let fixture: ComponentFixture<TextareaFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaFieldComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(TextareaFieldComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
