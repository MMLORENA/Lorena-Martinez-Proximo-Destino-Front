import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  font-family: ${(props) => props.theme.primaryFont};
`;

export default AppStyled;
