import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as L from 'leaflet';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import { MarkersState } from 'src/app/store/data/data.reduser';
import { MarkerServise } from 'src/app/services/map.service.';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map: L.Map;
  data: IObjectResponse[] | undefined;
  selectedMarkerId: number;
  constructor(
    private markerService: MarkerServise,
    private markersStore: Store<{ markers: MarkersState }>
  ) {}
  private initMap() {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  ngOnInit() {
    this.initMap();
    this.markerService.getMarkersFromServer(this.map);
    this.markersStore
      .select((state) => state.markers)
      .subscribe((markers) => (this.selectedMarkerId = markers.id));
  }
}
