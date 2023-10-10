import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { initialState, MarkersState } from './data/data.reduser';

export interface IAppState {
  router?: RouterReducerState;
  data: MarkersState;
}

export const initialAppState: IAppState = {
  data: initialState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
