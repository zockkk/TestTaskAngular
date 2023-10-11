import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import { getMarkers } from 'src/app/store/data/data.actions';
import { MarkersState } from 'src/app/store/data/data.reduser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  data: IObjectResponse[] | undefined;
  constructor(private markersStore: Store<{ markers: MarkersState }>) {}

  onClickObject(id: number) {
    console.log(id);
  }

  ngOnInit() {
    this.markersStore.dispatch(getMarkers());
    this.markersStore
      .select((state) => state.markers)
      .subscribe((markers) => (this.data = markers.data));
  }
}
