import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeModal, IUi } from "../interfaces/interfaces";

const uiInitialState: IUi = {
  isLoged: false,
  isLoading: false,
  modal: {
    isOpen: false,
    text: "",
    type: "correct",
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
      modal: { ...previousUi.modal, isOpen: false },
    }),
  },
});
export const UIReducer = uiSlice.reducer;

export const {
  openingModal: openModalActionCreator,
  closingModal: closeModalActionCreator,
} = uiSlice.actions;
