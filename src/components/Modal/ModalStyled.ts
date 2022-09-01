import styled from "styled-components";
const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  align-content: center;
  gap: 20px;

  .modal-text {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.primaryColor};
    text-align: center;
  }

  .svg-inline--fa {
    font-size: 7rem;
    color: ${(props) => props.theme.errorColor};
  }
`;

export default ModalStyled;
