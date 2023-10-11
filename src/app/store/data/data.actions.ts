import { createAction, props } from '@ngrx/store';
import { IObjectResponse } from 'src/app/models/serverResponse.type';

export const getMarkers = createAction('[Data] Load Data');

export const getMarkersSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: IObjectResponse[] }>()
);

export const getMarkersError = createAction(
  '[Data] Load Data Error',
  props<{ error: any }>()
);

export const selectMarker = createAction(
  '[Data] Select Marker',
  props<{ id: number }>()
);
