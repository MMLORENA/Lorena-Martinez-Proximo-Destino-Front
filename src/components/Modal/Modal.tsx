import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalStyled from "./ModalStyled";
import { useAppDispatch } from "../../store/hooks";
import { closeModalActionCreator } from "../../store/reducer/uiSlice/uiSlice";
import { useCallback, useEffect } from "react";

interface ModalProps {
  text: string;
  type: string;
}
const Modal = ({ text, type }: ModalProps) => {
  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [handleClose]);

  return (
    <>
      <ModalStyled className="modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="modal__icon-cross"
          data-testid="icon-cross"
          onClick={handleClose}
        />
        <FontAwesomeIcon
          icon={faPlaneSlash}
          className="modal__icon-plane"
          data-testid="icon-plane"
        />
        <span className="modal__text">{text}</span>
      </ModalStyled>
    </>
  );
};

export default Modal;
