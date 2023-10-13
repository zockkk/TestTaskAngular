import { TestBed } from '@angular/core/testing';
import { MarkerService } from './map.service';
import { HttpClient } from '@angular/common/http';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IObjectResponse } from '../models/serverResponse.type';

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

  it('получение данных с сервера для sidebar-menu', () => {
    const testUrl =
      'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json';
    const testData: IObjectResponse[] = [
      { id: 1, name: 'Lada', longitude: 1, latitude: 1 },
    ];
    service.getData().subscribe((data) => expect(data).toEqual(testData));
    const req = httpTestingController.expectOne(
      'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
});
