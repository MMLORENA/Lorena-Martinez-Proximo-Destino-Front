import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
  flex: 1;
  flex-direction: column;
  font-family: ${(props) => props.theme.primaryFont};
`;

export default AppStyled;
