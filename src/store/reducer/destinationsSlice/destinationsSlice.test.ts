import { Destinations } from "../../models/Destinations";
import {
  destinationsReducer,
  loadDestinationsActionCreator,
} from "./destinationsSlice";

describe("Given a destinationsSlice", () => {
  const previousDestinationsState: Destinations = [];

  describe("When it's receives a previous state", () => {
    test("Then should return a newGamesState same as list of games given", () => {
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
