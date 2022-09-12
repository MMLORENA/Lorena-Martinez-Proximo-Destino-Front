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

    unloadDestinations: () => destinationsInitialState,
    deleteDestination: (
      previousDestinations: Destinations,
      action: PayloadAction<string>
    ) =>
      previousDestinations.filter(
        (destination) => destination.id !== action.payload
      ),
  },
});

export const destinationsReducer = destinationsSlice.reducer;

export const {
  loadDestinations: loadDestinationsActionCreator,
  unloadDestinations: unloadDestinationsActionCreator,
  deleteDestination: deleteDestinationActionCreator,
} = destinationsSlice.actions;
