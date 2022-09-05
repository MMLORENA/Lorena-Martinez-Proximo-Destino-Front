import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import FeedbackModalStyled from "./FeedbackStyled";
import { useAppDispatch } from "../../store/hooks";
import { closeModalActionCreator } from "../../store/reducer/uiSlice";
import Logo from "../Logo/Logo";

interface ModalProps {
  text: string;
  type: "welcome" | "message";
}
const FeedbackModal = ({ text, type }: ModalProps) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModalActionCreator());
  };
  return (
    <>
      <FeedbackModalStyled>
        {type === "welcome" ? (
          <div className="feedback__container">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="feedback__icon-cross"
              data-testid="icon-cross"
              onClick={handleClose}
            />
            <span className="feedback__text">¡Hola!</span>
            <span className="feedback__text">{text}</span>
            <span className="feedback__emoji">🤗</span>
          </div>
        ) : (
          <div className="feedback__container">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="feedback__icon-cross"
              data-testid="icon-cross"
              onClick={handleClose}
            />
            <span className="feedback__text">Tu</span>
            <Logo />
            <span className="feedback__text">{text}</span>
          </div>
        )}
      </FeedbackModalStyled>
    </>
  );
};

export default FeedbackModal;
