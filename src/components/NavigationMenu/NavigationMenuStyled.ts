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

  .navigation {
    &__link {
      text-decoration: none;
      color: ${(props) => props.theme.primaryColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    &__text {
      display: block;
    }
  }
`;
export default NavigationMenuStyled;
