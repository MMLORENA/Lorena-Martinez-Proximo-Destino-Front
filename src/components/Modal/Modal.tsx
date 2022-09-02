import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalStyled from "./ModalStyled";
import { useAppDispatch } from "../../store/hooks";
import { closeModalActionCreator } from "../../store/reducer/uiSlice";

interface ModalProps {
  text: string;
  type: string;
}
const Modal = ({ text, type }: ModalProps) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModalActionCreator());
  };
  return (
    <>
      <ModalStyled>
        <FontAwesomeIcon
          icon={faXmark}
          className="icon-cross"
          data-testid="icon-cross"
          onClick={handleClose}
        />
        <FontAwesomeIcon
          icon={faPlaneSlash}
          className="icon-plane"
          data-testid="icon-plane"
        />
        <span className="modal-text">{text}</span>
      </ModalStyled>
    </>
  );
};

export default Modal;
