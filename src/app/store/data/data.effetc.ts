import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getMarkers, getMarkersError, getMarkersSuccess } from './data.actions';
import { FetchData } from 'src/app/API/getMarkers';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private markersService: FetchData) {}
  getMarkers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMarkers),
      mergeMap(() =>
        this.markersService.getData().pipe(
          map((data) => getMarkersSuccess({ data })),
          catchError((error) => of(getMarkersError({ error })))
        )
      )
    )
  );
}
