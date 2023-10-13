import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from './sidebar.component';
import { Store } from '@ngrx/store';
import { MarkersState } from 'src/app/models/serverResponse.type';
import { MarkerService } from 'src/app/services/map.service';

describe('SidebarComponent', () => {
  let markersStore: Store<{ markers: MarkersState }>;
  let markerServise: MarkerService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, markerServise, markersStore],
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  it('should create the sidebar', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
