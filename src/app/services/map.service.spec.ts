import { TestBed } from '@angular/core/testing';
import { MarkerService } from './map.service';
import { HttpClient } from '@angular/common/http';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('MarkerServise', () => {
  let service: MarkerService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: MockStore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkerService, provideMockStore()],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(MarkerService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
  });

  it('shude create MarkerService', () => {
    expect(service).toBeDefined();
  });
});
