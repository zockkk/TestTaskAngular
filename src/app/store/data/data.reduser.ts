import { createReducer, on } from '@ngrx/store';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import { getMarkersError, getMarkersSuccess } from './data.actions';

export interface MarkersState {
  data: IObjectResponse[];
}

export const initialState: MarkersState = {
  data: [],
};

const _markersReduser = createReducer(
  initialState,
  on(getMarkersSuccess, (state, { data }) => ({
    ...state,
    data: [...state.data, ...data],
  })),
  on(getMarkersError, (state, { error }) => ({ ...state, posts: [], error }))
);

export function markerReduser(state: MarkersState | undefined, action: any) {
  return _markersReduser(state, action);
}
