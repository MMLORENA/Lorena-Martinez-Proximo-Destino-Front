import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneSlash } from "@fortawesome/free-solid-svg-icons";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  type: string;
}
const Modal = ({ text, type }: ModalProps) => {
  return (
    <>
      <ModalStyled>
        <FontAwesomeIcon
          icon={faPlaneSlash}
          className="icon"
          data-testid="icon-plane"
        />
        <span className="modal-text">{text}</span>
      </ModalStyled>
    </>
  );
};

export default Modal;
