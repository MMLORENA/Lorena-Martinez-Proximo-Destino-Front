export interface IUi {
  isLoged: boolean;
  isLoading: boolean;
  modal: TypeModal;
}

export interface Modal {
  isOpen: boolean;
  text: string;
  type: "loading" | "error";
}

export type TypeModal = Modal;

export interface UserState {
  isLoged: boolean;
  userName: string;
}
