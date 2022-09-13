import styled from "styled-components";
const DestinationsListCardStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-content: center;
  justify-content: center;
  padding: 0;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;
export default DestinationsListCardStyled;
