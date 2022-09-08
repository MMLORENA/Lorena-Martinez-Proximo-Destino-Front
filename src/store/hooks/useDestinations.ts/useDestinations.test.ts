import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import Wrapper from "../../../test-utils/Wrapper";
import { Modal } from "../../interfaces/interfaces";
import { Destinations } from "../../models/Destinations";
import { loadDestinationsActionCreator } from "../../reducer/destinationsSlice/destinationsSlice";
import { openModalActionCreator } from "../../reducer/uiSlice/uiSlice";
import useDestinations from "./useDestinations";

let mockToken: string = "token";
const mockUseDispatch = jest.fn();
const mockUseAppSelector = {
  token: mockToken,
};

jest.mock("../../hooks", () => ({
  ...jest.requireActual("../../hooks"),
  useAppDispatch: () => mockUseDispatch,
  useAppSelector: () => mockUseAppSelector,
}));

describe("Given a getUserDestinations in a useDestination hook", () => {
  describe("When invoked and receives a list of destinations", () => {
    describe("And a user authenticated", () => {
      test("Then it should invoke dispatch with loadDestinationsActionCreator with that list", async () => {
        const mockDestinations: Destinations = [
          {
            destination: "Nepal",
            image:
              "https://elviajerofeliz.com/wp-content/uploads/2019/12/Que-ver-en-Nepal-_-10-Lugares-Imprescindibles.jpg",
            latitude: 200,
            longitud: 1000,
            cateogry: "adventure",
            firstPlan: "Himalaya",
            descriptionFirstPlan: "trekking",
            id: "63175bcd3349cd8da4ca9dbd",
          },
        ];

        const {
          result: {
            current: { getUserDestinations },
          },
        } = renderHook(useDestinations, { wrapper: Wrapper });

        await act(async () => {
          getUserDestinations();
        });

        await waitFor(() => {
          expect(mockUseDispatch).toHaveBeenCalledWith(
            loadDestinationsActionCreator(mockDestinations)
          );
        });
      });
    });

    describe("And a user no authenticated", () => {
      test("Then it should invoke dispatch with openModalActionCreator with a '¡Algo ha salido mal!' text", async () => {
        mockToken = "";

        const mockError: Modal = {
          isModalOpen: true,
          modalText: "!Algo ha salido mal¡",
          modalType: "error",
        };

        const {
          result: {
            current: { getUserDestinations },
          },
        } = renderHook(useDestinations, { wrapper: Wrapper });

        await getUserDestinations();

        expect(mockUseDispatch).toHaveBeenCalledWith(
          openModalActionCreator(mockError)
        );
      });
    });
  });
});
