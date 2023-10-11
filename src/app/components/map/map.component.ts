import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as L from 'leaflet';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import { getMarkers } from 'src/app/store/data/data.actions';
import { MarkersState } from 'src/app/store/data/data.reduser';

@Component({
  selector: 'app-map',

  templateUrl: './map.component.html',

  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map: L.Map | L.LayerGroup<any> | undefined = undefined;

  data: IObjectResponse[] | undefined;
  constructor(private markersStore: Store<{ markers: MarkersState }>) {}

  public addMarkers() {
    if (this.data && this.map) {
      for (let marker of this.data) {
        L.marker([marker.latitude, marker.longitude]).addTo(this.map);
      }
    }
  }
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

  public OnClick() {
    console.log(this.data);

    this.addMarkers();
  }

  ngAfterViewInit() {
    this.initMap();
  }

  ngOnInit() {
    this.markersStore.dispatch(getMarkers());
    this.markersStore
      .select((state) => state.markers)
      .subscribe((markers) => (this.data = markers.data));
  }
}
