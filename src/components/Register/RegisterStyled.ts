import styled from "styled-components";

const RegisterStyled = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__label {
      font-size: 1.3 rem;
      padding: 0.5rem;
      color: ${(props) => props.theme.primaryFont};
    }

    &__input {
      font-family: Montserrat, sans-serif;
      text-align: center;
      font-size: 1 rem;
      padding: 0.5 rem;
      width: 288px;
      height: 56px;
      border-radius: 18px;
    }
  }
`;

export default RegisterStyled;