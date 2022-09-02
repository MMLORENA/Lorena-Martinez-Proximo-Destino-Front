import styled from "styled-components";
const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-content: center;
  gap: 20px;
  min-width: 300px;
  position: fixed;
  background-color: ${(props) => props.theme.forthColor};

  @media (orientation: landscape) {
    flex-direction: row;
    gap: 40px;
  }

  .modal-text {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
    text-align: center;
    white-space: nowrap;

    @media (orientation: landscape) {
      font-size: 3rem;
    }
  }

  .svg-inline--fa {
    font-size: 7rem;
    color: ${(props) => props.theme.errorColor};

    @media (orientation: landscape) {
      font-size: 10rem;
    }
  }
`;

export default ModalStyled;
