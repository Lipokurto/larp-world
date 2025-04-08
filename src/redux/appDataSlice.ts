import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getBuildingsList, getLocationsList } from '../api/lists';

export type LocationItem = {
  id: number,
  name: string,
  type: string,
}

type BuildingItem = {
  id: number,
  type: string,
  class: string,
  sign: boolean,
}

interface AppDataState {
  locations: LocationItem[],
  buildings: BuildingItem[],
  loading: boolean,
  error: string | null,
}

const initialState: AppDataState = {
  locations: [],
  buildings: [],
  loading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  'appData/fetchAppData',
  async () => {
    const [locationsResponse, buildingsResponse] = await Promise.all([
      axios.get<LocationItem[]>(getLocationsList),
      axios.get<BuildingItem[]>(getBuildingsList),
    ]);

    return {
      locations: locationsResponse.data,
      buildings: buildingsResponse.data,
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
        state.locations = action.payload.locations;
        state.buildings = action.payload.buildings;
      })
      .addCase(fetchAppData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch app data';
      });
  },
});

export const appDataReducer = appDataSlice.reducer;