import styled from "styled-components";

const LogoStyled = styled.h1`
  margin: 0;
  background-image: url("./images/logo-optimizer.svg");
  background-repeat: repeat;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center;
  background-size: contain;

  @media (min-width: 850px) {
    background-image: url("./images/logo-optimizer.svg");
    background-repeat: repeat;
    background-repeat: no-repeat;
    background-size: contain;
    width: 290px;
    background-position: center;
  }
`;

export default LogoStyled;
