import { Observable } from 'rxjs';
import { IObjectResponse } from '../models/serverResponse.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchData {
  constructor(private http: HttpClient) {}

  private apiUrl =
    'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json';

  public getData(): Observable<IObjectResponse[]> {
    return this.http.get<IObjectResponse[]>(this.apiUrl);
  }
}
