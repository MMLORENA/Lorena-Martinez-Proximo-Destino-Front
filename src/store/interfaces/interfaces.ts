export interface IUi {
  modal: TypeModal;
  feedback: TypeFeedback;
}

export interface Modal {
  isModalOpen: boolean;
  modalText: string;
  modalType: "loading" | "error";
}

export interface Feedback {
  isFeedbackOpen: boolean;
  feedbackText: string;
  feedbackType: "welcome" | "message";
}

export type TypeModal = Modal;
export type TypeFeedback = Feedback;
