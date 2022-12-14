import styled from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .button {
    font-size: 1rem;
    align-self: center;
    font-weight: bold;
    padding: 1rem;
    display: flex;
    margin: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 21px;

    @media (min-width: 850px) {
      cursor: pointer;
    }

    &--small {
      width: 11.25rem;
      height: 2.8rem;
      color: ${(props) => props.theme.secondaryColor};
      background-color: ${(props) => props.theme.forthColor};
      border: 1.73 px;
      border: solid;
    }

    &:active {
      color: ${(props) => props.theme.primaryColor};
      background-color: ${(props) => props.theme.secondaryColor};
      border: none;
    }

    &:disabled {
      color: ${(props) => props.theme.thirdColor};
    }
  }
`;

export { ButtonStyled };
