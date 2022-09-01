import styled from "styled-components";

const RegisterStyled = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (orientation: landscape) {
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (orientation: landscape) {
      flex-direction: row;
      flex-wrap: nowrap;
      width: 500px;
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
      width: 300px;
      height: 56px;
      border-radius: 18px;
    }
  }
`;

export default RegisterStyled;
