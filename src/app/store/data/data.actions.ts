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

export const selectId = createAction(
  '[Data] Select Id',
  props<{ id: number }>()
);

export const filterMarkers = createAction(
  '[Data] Filter Data',
  props<{ value: string }>()
);
