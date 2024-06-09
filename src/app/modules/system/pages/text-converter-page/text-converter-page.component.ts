import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConverterService } from '../../services/converter.service';
import { Subject, takeUntil } from 'rxjs';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer/src/ng2-pdfjs-viewer.component';

@Component({
  selector: 'app-text-converter-page',
  templateUrl: './text-converter-page.component.html',
  styleUrls: ['./text-converter-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextConverterPageComponent implements OnInit, OnDestroy {
  @ViewChild('pdfViewer') pdfViewer: PdfJsViewerComponent;

  form: FormGroup;

  conversionHistory: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private converterService: ConverterService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      text: [null, [Validators.required]],
    });

    this.setConversionHistory();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  convertToPDF() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.converterService
      .convertToPDF(this.form.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.pdfViewer.pdfSrc = fileReader.result as string;
          this.pdfViewer.refresh();
          this.updateConversionHistory();
          this.cd.markForCheck();
        };
        fileReader.readAsDataURL(res);
      });
  }

  updateConversionHistory() {
    const currentHistory = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
    currentHistory.push(this.pdfViewer.pdfSrc);
    localStorage.setItem('conversionHistory', JSON.stringify(currentHistory));
    this.setConversionHistory();
  }

  setConversionHistory() {
    this.conversionHistory = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
  }

  viewPDF(pdf: string) {
    this.pdfViewer.pdfSrc = pdf;
    this.pdfViewer.refresh();
  }
}
