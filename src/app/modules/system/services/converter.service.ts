import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  convertToPDF(payload: { text: string }): Observable<Blob> {
    return this.http.post<Blob>(`${this.apiUrl}/create-pdf?apiKey=${environment.apiKey}`, payload, {
      responseType: 'blob' as 'json',
    });
  }
}
