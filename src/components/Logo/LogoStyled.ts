import styled from "styled-components";

const LogoStyled = styled.h1`
  margin: 0;
  background-image: url("./images/logo-optimizer.svg");
  background-image: url("./images/logo-optimizer.svg");
  background-repeat: repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: contain;
  width: 90%;

  @media (min-width: 850px) {
    cursor: pointer;
  }

  .logo {
    height: auto;
    width: 100%;
  }
`;

export default LogoStyled;
