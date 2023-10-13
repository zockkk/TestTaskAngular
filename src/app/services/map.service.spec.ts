import { TestBed } from '@angular/core/testing';
import { MarkerService } from './map.service';

describe('MarkerServise', () => {
  let service: MarkerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkerService],
    });

    service = TestBed.inject(MarkerService);
  });

  it('shude create MarkerService', () => {
    expect(service).toBeDefined();
  });
});
