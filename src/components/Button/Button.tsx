import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: "small" | "big";
  actionOnclick: () => void;
  type: "button" | "submit";
  isDisabled: boolean;
}
const Button = ({
  buttonText,
  actionOnclick,
  classNameTypeButton,
  type,
  isDisabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={`button button--${classNameTypeButton}`}
        onClick={() => actionOnclick()}
        type={type}
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </ButtonStyled>
  );
};

export default Button;
