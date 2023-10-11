import { Observable } from 'rxjs';
import { IObjectResponse } from '../models/serverResponse.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerServise {
  constructor(private http: HttpClient) {}

  private apiUrl =
    'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json';

  makeSelectedCircleMarkers(map: L.Map, lat: number, lon: number) {
    map.setView([lat, lon], 10);
    const circle = L.circleMarker([lat, lon]);
    circle.addTo(map);
  }

  getMarkersFromServer(map: L.Map) {
    this.http.get(this.apiUrl).subscribe((res: IObjectResponse[]) => {
      for (const c of res) {
        const lon = c.longitude;

        const lat = c.latitude;

        const marker = L.marker([lat, lon]);

        marker.addTo(map).on('click', () => {
          map.setView([lat, lon], 10);
          const circle = L.circleMarker([lat, lon]);
          circle.addTo(map);
        });
      }
    });
  }

  getData(): Observable<IObjectResponse[]> {
    return this.http.get<IObjectResponse[]>(this.apiUrl);
  }
}
