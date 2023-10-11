import { createReducer, on } from '@ngrx/store';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import {
  getMarkersError,
  getMarkersSuccess,
  selectMarker,
} from './data.actions';

export interface MarkersState {
  data: IObjectResponse[];
  id: number;
}

export const initialState: MarkersState = {
  data: [],
  id: -1,
};

const _markersReduser = createReducer(
  initialState,
  on(getMarkersSuccess, (state, { data }) => ({
    ...state,
    data: [...data],
  })),
  on(getMarkersError, (state, { error }) => ({ ...state, data: [], error })),
  on(selectMarker, (state, { id }) => {
    console.log(id);
    return { ...state, id };
  })
);

export function markerReduser(state: MarkersState | undefined, action: any) {
  return _markersReduser(state, action);
}
