import { Observable } from 'rxjs';
import { IObjectResponse } from '../models/serverResponse.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Store } from '@ngrx/store';
import { MarkersState } from '../store/data/data.reduser';
import { selectId } from '../store/data/data.actions';

@Injectable({
  providedIn: 'root',
})
export class MarkerServise {
  constructor(
    private http: HttpClient,
    private store: Store<{ markers: MarkersState }>
  ) {}

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
          this.store.dispatch(selectId({ id: c.id }));
        });
      }
    });
  }

  getData(): Observable<IObjectResponse[]> {
    return this.http.get<IObjectResponse[]>(this.apiUrl);
  }
}
