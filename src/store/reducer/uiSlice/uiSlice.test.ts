import { Feedback, IUi, Modal } from "../../interfaces/interfaces";
import {
  closeFeedbackActionCreator,
  closeModalActionCreator,
  openFeedbackActionCreator,
  openModalActionCreator,
  UIReducer,
} from "./uiSlice";

describe("Given a function uiSlice", () => {
  describe("When it's receives an initalState", () => {
    const initialUi: IUi = {
      modal: {
        isModalOpen: false,
        modalText: "",
        modalType: "loading",
      },
      feedback: {
        isFeedbackOpen: false,
        feedbackText: "",
        feedbackType: "welcome",
      },
    };

    describe("And an action 'ui/openModalActionCreator'", () => {
      test("Then should return a ui state with the modal open & modalTest 'Algo ha ido mal'", () => {
        const expectedUi: IUi = {
          modal: {
            isModalOpen: true,
            modalText: "Algo ha ido mal",
            modalType: "error",
          },
          feedback: {
            isFeedbackOpen: false,
            feedbackText: "",
            feedbackType: "welcome",
          },
        };
        const payloadUi: Modal = {
          isModalOpen: true,
          modalText: "Algo ha ido mal",
          modalType: "error",
        };

        const uiReducerTest = UIReducer(
          initialUi,
          openModalActionCreator(payloadUi)
        );

        expect(uiReducerTest).toStrictEqual(expectedUi);
      });
    });

    describe("And an action 'ui/closeModalActionCreator'", () => {
      test("Then should return modal object with isModalOpen false", () => {
        const expectedUi: IUi = {
          modal: {
            isModalOpen: false,
            modalText: "",
            modalType: "loading",
          },
          feedback: {
            isFeedbackOpen: false,
            feedbackText: "",
            feedbackType: "welcome",
          },
        };

        const uiReducerTest = UIReducer(initialUi, closeModalActionCreator());

        expect(uiReducerTest).toStrictEqual(expectedUi);
      });
    });

    describe("And an action 'ui/openFeedbackActionCreator'", () => {
      test("Then should return a ui state with the modal open & modalTest 'Algo ha ido mal'", () => {
        const expectedUi: IUi = {
          modal: {
            isModalOpen: false,
            modalText: "",
            modalType: "loading",
          },
          feedback: {
            isFeedbackOpen: true,
            feedbackText: "Mar",
            feedbackType: "welcome",
          },
        };
        const payloadUi: Feedback = {
          isFeedbackOpen: true,
          feedbackText: "Mar",
          feedbackType: "welcome",
        };

        const uiReducerTest = UIReducer(
          initialUi,
          openFeedbackActionCreator(payloadUi)
        );

        expect(uiReducerTest).toStrictEqual(expectedUi);
      });
    });

    describe("And an action 'ui/closeFeedbackActionCreator'", () => {
      test("Then should return modal object with isModalOpen false", () => {
        const expectedUi: IUi = {
          modal: {
            isModalOpen: false,
            modalText: "",
            modalType: "loading",
          },
          feedback: {
            isFeedbackOpen: false,
            feedbackText: "",
            feedbackType: "welcome",
          },
        };

        const uiReducerTest = UIReducer(
          initialUi,
          closeFeedbackActionCreator()
        );

        expect(uiReducerTest).toStrictEqual(expectedUi);
      });
    });
  });
});
