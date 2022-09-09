import destinationsTest from "../../../test-utils/mocksDestinations/mockDestinations";
import { Destinations } from "../../models/Destinations";
import {
  deleteDestinationActionCreator,
  destinationsReducer,
  loadDestinationsActionCreator,
  unloadDestinationsActionCreator,
} from "./destinationsSlice";

describe("Given a destinationsSlice", () => {
  const previousDestinationsState: Destinations = [];

  describe("And an loadDestinationsActionCreator", () => {
    describe("When it's receives a previous state", () => {
      test("Then should return a destinations list with the destination given", () => {
        const expectedDestinations: Destinations = destinationsTest;
        const destinationsSliceState = destinationsReducer(
          previousDestinationsState,
          loadDestinationsActionCreator(expectedDestinations)
        );

        expect(destinationsSliceState).toStrictEqual(expectedDestinations);
      });
    });
  });

  describe("And an unloadDestinationsActionCreator", () => {
    describe("When it's called", () => {
      test("Then should return a destinations list empty", () => {
        const expectedDestinations: Destinations = [];

        const destinationsSliceState = destinationsReducer(
          previousDestinationsState,
          unloadDestinationsActionCreator()
        );

        expect(destinationsSliceState).toStrictEqual(expectedDestinations);
      });
    });
  });

  describe("And an deletedDestinationActionCreator", () => {
    describe("When it's called with a destination id and a destinations list", () => {
      test("Then should return a destinations list without the id destination received", () => {
        const idDeletingDestination = "63175bcd3349cd8da4ca9dbd";
        const expectedDestinations: Destinations = [];

        const destinationsSliceState = destinationsReducer(
          previousDestinationsState,
          deleteDestinationActionCreator(idDeletingDestination)
        );

        expect(destinationsSliceState).toStrictEqual(expectedDestinations);
      });
    });
  });
});
