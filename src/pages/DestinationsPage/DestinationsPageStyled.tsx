import styled from "styled-components";

const DestinationPageStyled = styled.div`
  padding-bottom: 100px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  @media (min-width: 850px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    align-content: flex-start;
    padding: 0;
    padding-top: 100px;
  }

  .icon-logo {
    margin: 0;
    background-image: url("./images/logo.svg");
    background-repeat: repeat;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: contain;
    width: 90%;

    @media (min-width: 850px) {
      display: none;
    }
  }

  .notDestinations {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;

    @media (min-width: 850px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__text {
      font-size: 3rem;
      font-weight: bold;
      text-align: center;

      @media (min-width: 850px) {
        font-size: 5rem;
      }
    }
  }
`;

export default DestinationPageStyled;
