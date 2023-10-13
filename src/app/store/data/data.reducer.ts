import { createReducer, on } from '@ngrx/store';
import { IObjectResponse } from 'src/app/models/serverResponse.type';
import {
  filterMarkers,
  getMarkersError,
  getMarkersSuccess,
  selectId,
} from './data.actions';

export interface MarkersState {
  data: IObjectResponse[];
  filteredData: IObjectResponse[];
  id: number;
}

export const initialState: MarkersState = {
  data: [],
  filteredData: [],
  id: -1,
};

const _markersReduser = createReducer(
  initialState,
  on(getMarkersSuccess, (state, { data }) => ({
    ...state,
    data: [...data],
    filteredData: [...data],
  })),
  on(getMarkersError, (state, { error }) => ({ ...state, data: [], error })),
  on(selectId, (state, { id }) => ({
    ...state,
    id: id,
  })),
  on(filterMarkers, (state, { value }) => {
    return {
      ...state,
      filteredData: state.data.filter((marker) =>
        marker.name.toLowerCase().includes(value.toLowerCase())
      ),
    };
  })
);

export function markerReduser(state: MarkersState | undefined, action: any) {
  return _markersReduser(state, action);
}
