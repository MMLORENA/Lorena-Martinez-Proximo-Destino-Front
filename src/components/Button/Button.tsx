import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: "small" | "big";
  actionOnclick: () => void;
  type: "button" | "submit";
}
const Button = ({
  buttonText,
  actionOnclick,
  classNameTypeButton,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={`button button--${classNameTypeButton}`}
        onClick={() => actionOnclick()}
        type={type}
      >
        {buttonText}
      </button>
    </ButtonStyled>
  );
};

export default Button;
