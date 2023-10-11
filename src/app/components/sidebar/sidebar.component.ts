import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import { MarkerServise } from 'src/app/services/map.service.';
import { getMarkers, selectMarker } from 'src/app/store/data/data.actions';
import { MarkersState } from 'src/app/store/data/data.reduser';
import * as L from 'leaflet';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() _map: L.Map;
  data: IObjectResponse[] | undefined;
  constructor(
    private markersStore: Store<{ markers: MarkersState }>,
    private markerServise: MarkerServise
  ) {}

  onClickObject(marker: IObjectResponse) {
    this.markerServise.makeSelectedCircleMarkers(
      this._map,
      marker.latitude,
      marker.longitude
    );
  }

  ngOnInit() {
    this.markersStore.dispatch(getMarkers());
    this.markersStore
      .select((state) => state.markers)
      .subscribe((markers) => (this.data = markers.data));
  }
}
