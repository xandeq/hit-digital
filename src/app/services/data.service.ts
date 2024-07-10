import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataResponse } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://hitdigital.com.br/test.php';

  constructor(private http: HttpClient) {}

  getData(): Observable<DataResponse> {
    return this.http.get<DataResponse>(this.apiUrl);
  }
}
