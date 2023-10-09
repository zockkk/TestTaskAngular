import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { IObjectResponse } from 'src/app/models/serverResponse.type';

@Component({
  selector: 'app-map',

  templateUrl: './map.component.html',

  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit {
  private map: L.Map | L.LayerGroup<any> | undefined = undefined;
  private data: IObjectResponse[] | undefined = undefined;

  private async initObjectsData(): Promise<IObjectResponse[]> {
    const response = await fetch(
      'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json'
    );
    const result: Promise<IObjectResponse[]> = response.json();
    return result;
  }

  private initMap(): void {
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

  public addMarkers() {
    if (this.data && this.map) {
      console.log('Работает!');
      for (let marker of this.data) {
        const newMarker = L.marker([marker.latitude, marker.longitude]).addTo(
          this.map
        );
      }
    }
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  async ngOnInit() {
    this.data = await this.initObjectsData();
  }
}
