import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ConverterService } from '../../services/converter.service';
import { TextConverterPageComponent } from './text-converter-page.component';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';
import { ChangeDetectorRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

describe('TextConverterPageComponent', () => {
  let component: TextConverterPageComponent;
  let fixture: ComponentFixture<TextConverterPageComponent>;
  let converterService: ConverterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextConverterPageComponent, PdfJsViewerComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, SharedModule],
      providers: [ConverterService, ChangeDetectorRef],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextConverterPageComponent);
    component = fixture.componentInstance;
    converterService = TestBed.inject(ConverterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert text to PDF', () => {
    const textToConvert = 'This is a test text';
    component.form.controls['text'].setValue(textToConvert);

    spyOn(converterService, 'convertToPDF').and.returnValue(of(new Blob(['PDF content'], { type: 'application/pdf' })));
    spyOn(component['cd'], 'markForCheck');

    component.convertToPDF();

    expect(converterService.convertToPDF).toHaveBeenCalledWith({ text: textToConvert });
  });
});
