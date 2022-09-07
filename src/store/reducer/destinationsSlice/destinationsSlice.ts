import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Destinations } from "../../models/Destinations";

const destinationsInitialState: Destinations = [];

const destinationsSlice = createSlice({
  name: "destinations",
  initialState: destinationsInitialState,
  reducers: {
    loadDestinations: (
      _previousDestinations: Destinations,
      action: PayloadAction<Destinations>
    ) => [...action.payload],
  },
});

export const destinationsReducer = destinationsSlice.reducer;

export const { loadDestinations: loadDestinationsActionCreator } =
  destinationsSlice.actions;
