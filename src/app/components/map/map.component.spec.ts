import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MapComponent } from './map.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkerService } from 'src/app/services/map.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('MapComponent', () => {
  let store: MockStore;
  let markerServise: MarkerService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MarkerService, provideMockStore()],
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [MapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    markerServise = TestBed.inject(MarkerService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
  });

  it('should create the map', () => {
    const fixture = TestBed.createComponent(MapComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
