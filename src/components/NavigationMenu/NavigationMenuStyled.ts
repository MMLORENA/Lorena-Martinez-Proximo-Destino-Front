import styled from "styled-components";
const NavigationMenuStyled = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.forthColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px;
  z-index: 100;
  bottom: 0;
  box-shadow: 2px 0 8px ${(props) => props.theme.primaryColor};

  @media (min-width: 850px) {
    top: 0;
    height: 10%;
    gap: 20px;
    padding-left: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: none;

    @media (min-width: 850px) {
      display: flex;
      align-self: left;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 850px) {
      width: fit-content;
      display: flex;
      gap: 20px;
    }

    &__logo {
      @media (min-width: 850px) {
        background-image: url("./images/logo-optimizer.svg");
        background-repeat: repeat;
        background-repeat: no-repeat;
        background-size: contain;
        width: 290px;
        background-position: center;
        height: 1000px;

        cursor: pointer;
      }
    }

    &__icon {
      @media (min-width: 850px) {
        display: none;
      }
    }

    &__text {
      display: block;

      @media (min-width: 850px) {
        font-size: 1.5rem;
      }
    }

    &__text:hover {
      @media (min-width: 850px) {
        color: ${(props) => props.theme.secondaryColor};
      }
    }

    &__link {
      text-decoration: none;
      color: ${(props) => props.theme.primaryColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      &--active {
        color: ${(props) => props.theme.secondaryColor};
      }
    }
  }
`;
export default NavigationMenuStyled;
