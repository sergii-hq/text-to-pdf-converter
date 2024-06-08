import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextConverterPageComponent } from './text-converter-page.component';

describe('TextConverterPageComponent', () => {
  let component: TextConverterPageComponent;
  let fixture: ComponentFixture<TextConverterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextConverterPageComponent]
    });
    fixture = TestBed.createComponent(TextConverterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
