import { Observable } from 'rxjs';
import { IObjectResponse } from '../models/serverResponse.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Store } from '@ngrx/store';
import { MarkersState } from '../store/data/data.reducer';
import { selectId } from '../store/data/data.actions';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  private selectedMarker: L.CircleMarker<any>;
  private apiUrl =
    'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json';

  constructor(
    private http: HttpClient,
    private store: Store<{ markers: MarkersState }>
  ) {}

  makeSelectedCircleMarkers(id: number, map: L.Map, lat: number, lon: number) {
    map.setView([lat, lon], 10);
    this.store.dispatch(selectId({ id: id }));
    if (this.selectedMarker) {
      this.selectedMarker.remove();
    }
    this.selectedMarker = L.circleMarker([lat, lon]);
    this.selectedMarker.addTo(map);
  }

  getMarkersFromServer(map: L.Map) {
    this.http
      .get<IObjectResponse[]>(this.apiUrl)
      .subscribe((res: IObjectResponse[]) => {
        for (const c of res) {
          const lon = c.longitude;
          const lat = c.latitude;
          const marker = L.marker([lat, lon]);
          marker.on('click', () => {
            map.setView([lat, lon], 10);
            this.store.dispatch(selectId({ id: c.id }));
            if (this.selectedMarker) {
              this.selectedMarker.remove();
            }
            this.selectedMarker = L.circleMarker([lat, lon]);
            this.selectedMarker.addTo(map);
          });
          marker.addTo(map);
        }
      });
  }

  getData(): Observable<IObjectResponse[]> {
    return this.http.get<IObjectResponse[]>(this.apiUrl);
  }
}
