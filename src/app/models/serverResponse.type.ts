export interface MarkersState {
  data: IObjectResponse[];
  filteredData: IObjectResponse[];
  id: number;
}

export interface IObjectResponse {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}
