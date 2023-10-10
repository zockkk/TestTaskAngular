import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IObjectResponse } from 'src/app/models/serverResponse.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  private data: IObjectResponse[] | undefined;
  constructor() {}

  public onClick(marker: IObjectResponse) {
    console.log(marker.id);
  }

  markers$: Observable<IObjectResponse[]> | undefined;

  ngOnInit() {}
}
