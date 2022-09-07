import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeModal, IUi, TypeFeedback } from "../../interfaces/interfaces";

const uiInitialState: IUi = {
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

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openingModal: (previousUi: IUi, action: PayloadAction<TypeModal>) => ({
      ...previousUi,
      modal: { ...action.payload },
    }),
    closingModal: (previousUi: IUi) => ({
      ...previousUi,
      modal: { ...previousUi.modal, isModalOpen: false },
    }),
    openingFeedback: (
      previousUi: IUi,
      action: PayloadAction<TypeFeedback>
    ) => ({
      ...previousUi,
      feedback: { ...action.payload },
    }),
    closingFeedback: (previousUi: IUi) => ({
      ...previousUi,
      feedback: { ...previousUi.feedback, isFeedbackOpen: false },
    }),
  },
});
export const UIReducer = uiSlice.reducer;

export const {
  openingModal: openModalActionCreator,
  closingModal: closeModalActionCreator,
  openingFeedback: openFeedbackActionCreator,
  closingFeedback: closeFeedbackActionCreator,
} = uiSlice.actions;
