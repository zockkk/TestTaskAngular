import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import { MarkerServise } from 'src/app/services/map.service';
import {
  filterMarkers,
  getMarkers,
  selectId,
} from 'src/app/store/data/data.actions';
import { MarkersState } from 'src/app/models/serverResponse.type';
import * as L from 'leaflet';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() _map: L.Map;
  tern: string = '';
  data: IObjectResponse[] | undefined;
  selectedMarkerId: number;
  constructor(
    private markersStore: Store<{ markers: MarkersState }>,
    private markerServise: MarkerServise
  ) {}

  onInput() {
    this.markersStore.dispatch(filterMarkers({ value: this.tern }));
  }

  onClickObject(marker: IObjectResponse) {
    this.markerServise.makeSelectedCircleMarkers(
      marker.id,
      this._map,
      marker.latitude,
      marker.longitude,
    );
  }

  ngOnInit() {
    this.markersStore.dispatch(getMarkers());
    this.markersStore
      .select((state) => state.markers)
      .subscribe((markers) => {
        this.data = markers.filteredData;
      });
    this.markersStore
      .select((state) => state.markers)
      .subscribe((markers) => (this.selectedMarkerId = markers.id));
  }
}
