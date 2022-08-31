import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: "small" | "big";
  actionOnclick: () => void;
}
const Button = ({
  buttonText,
  actionOnclick,
  classNameTypeButton,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={`button button--${classNameTypeButton}`}
        onClick={() => actionOnclick()}
      >
        {buttonText}
      </button>
    </ButtonStyled>
  );
};

export default Button;
