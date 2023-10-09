import { Component, OnInit } from '@angular/core';
import { IObjectResponse } from 'src/app/models/serverResponse.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  private data: IObjectResponse[] = [];

  constructor() {}

  async ngOnInit() {
  }
}
