import styled from "styled-components";
const NavigationMenuStyled = styled.nav`
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
    background-image: url("./images/logoMbl.webp");
    background-position: right;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;
  }

  .navigation {
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

    &__text {
      display: block;

      @media (min-width: 850px) {
        font-size: 1.5rem;
      }
    }

    &__icon {
      @media (min-width: 850px) {
        display: none;
      }
    }

    &__text:hover {
      @media (min-width: 850px) {
        color: ${(props) => props.theme.secondaryColor};
      }
    }
  }
`;
export default NavigationMenuStyled;
