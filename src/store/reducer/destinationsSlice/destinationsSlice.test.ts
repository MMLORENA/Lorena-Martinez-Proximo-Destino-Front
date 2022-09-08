import { Destinations } from "../../models/Destinations";
import {
  destinationsReducer,
  loadDestinationsActionCreator,
  unloadDestinationsActionCreator,
} from "./destinationsSlice";

describe("Given a destinationsSlice", () => {
  const previousDestinationsState: Destinations = [];

  describe("And an loadDestinationActionCreator", () => {
    describe("When it's receives a previous state", () => {
      test("Then should return a destinations list with the destination given", () => {
        const expectedDestinations: Destinations = [
          {
            destination: "Nepal",
            image: "./",
            latitude: 200,
            longitud: 24,
            cateogry: "Adventure",
            firstPlan: "Himalaya",
            descriptionFirstPlan: "Trekking",
            id: "0",
          },
        ];

        const destinationsSliceState = destinationsReducer(
          previousDestinationsState,
          loadDestinationsActionCreator(expectedDestinations)
        );

        expect(destinationsSliceState).toStrictEqual(expectedDestinations);
      });
    });
  });

  describe("And an unloadDestinationActionCreator", () => {
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
});
