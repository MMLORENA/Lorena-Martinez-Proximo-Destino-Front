import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import FeedbackModalStyled from "./FeedbackStyled";
import { useAppDispatch } from "../../store/hooks";
import { closeFeedbackActionCreator } from "../../store/reducer/uiSlice/uiSlice";
import Logo from "../Logo/Logo";
import { useCallback, useEffect } from "react";

interface ModalProps {
  text: string;
  type: string;
}
const FeedbackModal = ({ text, type }: ModalProps) => {
  const dispatch = useAppDispatch();

  const handleCloseFeedback = useCallback(() => {
    dispatch(closeFeedbackActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCloseFeedback();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [handleCloseFeedback]);

  return (
    <>
      <FeedbackModalStyled>
        {type === "welcome" ? (
          <div className="feedback__container">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="feedback__icon-cross"
              data-testid="icon-cross"
              onClick={handleCloseFeedback}
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
              onClick={handleCloseFeedback}
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
