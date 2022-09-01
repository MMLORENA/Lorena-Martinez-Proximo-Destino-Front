import { IUi, Modal } from "../interfaces/interfaces";
import {
  closeModalActionCreator,
  openModalActionCreator,
  UIReducer,
} from "./uiSlice";

describe("Given a function uiSlice", () => {
  describe("When it's receives an initalState", () => {
    describe("And an action 'ui/openModalActionCreator'", () => {
      test("Then should return a", () => {
        const expectedUi: IUi = {
          isLoged: false,
          isLoading: false,
          modal: {
            isOpen: true,
            text: "Algo ha ido mal",
            type: "error",
          },
        };
        const payloadUi: Modal = {
          isOpen: true,
          text: "Algo ha ido mal",
          type: "error",
        };

        const initialUi: IUi = {
          isLoged: false,
          isLoading: false,
          modal: {
            isOpen: false,
            text: "",
            type: "loading",
          },
        };

        const uiReducerTest = UIReducer(
          initialUi,
          openModalActionCreator(payloadUi)
        );

        expect(uiReducerTest).toStrictEqual(expectedUi);
      });
    });

    describe("And an action 'ui/closeModalActionCreator'", () => {
      test("Then should return a", () => {
        const expectedUi: IUi = {
          isLoged: false,
          isLoading: false,
          modal: {
            isOpen: false,
            text: "Algo ha ido mal",
            type: "error",
          },
        };

        const initialUi: IUi = {
          isLoged: false,
          isLoading: false,
          modal: {
            isOpen: true,
            text: "Algo ha ido mal",
            type: "error",
          },
        };

        const uiReducerTest = UIReducer(initialUi, closeModalActionCreator);

        expect(uiReducerTest).toStrictEqual(expectedUi);
      });
    });
  });
});
