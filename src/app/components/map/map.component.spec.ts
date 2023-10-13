import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MapComponent } from './map.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkerService } from 'src/app/services/map.service';

describe('MapComponent', () => {
  let service: MarkerService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MarkerService],
      imports: [RouterTestingModule],
      declarations: [MapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    service = TestBed.inject(MarkerService);
  });

  it('should create the map', () => {
    const fixture = TestBed.createComponent(MapComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
