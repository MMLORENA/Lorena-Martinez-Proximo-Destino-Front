import styled from "styled-components";

const RegisterStyled = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: 850px) {
    align-items: center;
    margin: 20px 0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 850px) {
      flex-direction: row;
      flex-wrap: nowrap;
      width: 80%;
      gap: 20px;
      justify-content: space-between;
    }

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
      width: 100%;
      height: 56px;
      border-radius: 18px;

      @media (min-width: 850px) {
        width: 50%;
      }
    }

    .button {
      @media (min-width: 850px) {
        align-self: flex-end;
      }
    }

    &__input:focus {
      font-family: Montserrat, sans-serif;
      border-color: ${(props) => props.theme.secondaryColor};
    }

    .repeatedPassword:focus {
      border-color: ${(props) => props.theme.errorColor};
    }
  }
`;

export default RegisterStyled;
