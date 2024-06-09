import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConverterService } from './converter.service';
import { environment } from '../../../../environments/environment';

describe('ConverterService', () => {
  let service: ConverterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConverterService],
    });

    service = TestBed.inject(ConverterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert text to PDF', () => {
    const textToConvert = { text: 'This is a test text' };
    const apiUrl = `${environment.apiUrl}/create-pdf?apiKey=${environment.apiKey}`;
    const mockBlob = new Blob(['PDF content'], { type: 'application/pdf' });

    service.convertToPDF(textToConvert).subscribe((res) => {
      expect(res).toEqual(mockBlob);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockBlob);
  });
});
