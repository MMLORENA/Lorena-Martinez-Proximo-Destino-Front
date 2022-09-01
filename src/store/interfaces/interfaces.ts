export interface IUi {
  isLoged: boolean;
  isLoading: boolean;
  modal: TypeModal;
}

export interface Modal {
  isOpen: boolean;
  text: string;
  type: "correct" | "error";
}

export type TypeModal = Modal;
