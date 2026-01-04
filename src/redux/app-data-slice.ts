import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAchivmentsList, getBuildingsList, getLocationsList } from '../api/lists';
import { addIconFromList } from './achivment-icon-builder';
import { currentGameYear } from '../GAME_YEAR';

export type LocationItem = {
  id: number,
  name: string,
  type: string,
  game_year: number,
}

type BuildingItem = {
  id: number,
  type: string,
  class: string,
  sign: boolean,
}

export type AchivmentItem = {
  id: number,
  label: string,
  status: string,
  about: boolean,
  img?: string,
}

interface AppDataState {
  locations: LocationItem[],
  buildings: BuildingItem[],
  achivments: AchivmentItem[],
  loading: boolean,
  error: string | null,
}

const initialState: AppDataState = {
  locations: [],
  buildings: [],
  achivments: [],
  loading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  'appData/fetchAppData',
  async () => {
    const [locationsResponse, buildingsResponse, achivmentsResponse] = await Promise.all([
      axios.get<LocationItem[]>(getLocationsList),
      axios.get<BuildingItem[]>(getBuildingsList),
      axios.get<AchivmentItem[]>(getAchivmentsList),
    ]);

    return {
      locations: locationsResponse.data,
      buildings: buildingsResponse.data,
      achivments: achivmentsResponse.data.map((achivment) => (addIconFromList(achivment))),
    };
  },
);

const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppData.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload.locations.filter(p => p.game_year === currentGameYear);
        state.buildings = action.payload.buildings;
        state.achivments = action.payload.achivments;
      })
      .addCase(fetchAppData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch app data';
      });
  },
});

export const appDataReducer = appDataSlice.reducer;