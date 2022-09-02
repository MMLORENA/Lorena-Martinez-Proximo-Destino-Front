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

  @media (min-width: 850px) {
    flex-direction: row;
    gap: 40px;
    width: 100%;
  }

  .modal-text {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
    text-align: center;
    white-space: nowrap;

    @media (min-width: 850px) {
      font-size: 3rem;
    }
  }

  .icon-plane {
    font-size: 7rem;
    color: ${(props) => props.theme.errorColor};

    @media (min-width: 850px) {
      font-size: 10rem;
    }
  }

  .icon-cross {
    font-size: 3rem;
    color: ${(props) => props.theme.primaryColor};
    position: absolute;
    top: 75px;
    right: 273px;

    @media (min-width: 850px) {
      font-size: 10rem;
      top: 20px;
      right: 40px;
      font-size: 3rem;
    }
  }
`;

export default ModalStyled;
