import styled from "styled-components";
const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  gap: 20px;
  min-width: 300px;
  position: fixed;
  background-color: ${(props) => props.theme.forthColor};
  z-index: 8;

  @media (min-width: 850px) {
    flex-direction: row;
    gap: 45px;
    width: 100%;
  }

  .modal-icon-world {
    -webkit-animation: spin 1s linear infinite;
    -moz-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    border-radius: 30px;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .modal {
    &__text {
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme.primaryColor};
      text-align: center;
      z-index: 10;

      @media (min-width: 850px) {
        font-size: 3rem;
      }
    }
    &__icon-plane {
      font-size: 7rem;
      color: ${(props) => props.theme.errorColor};

      @media (min-width: 850px) {
        font-size: 10rem;
      }
    }

    &__icon-cross {
      font-size: 3rem;
      color: ${(props) => props.theme.primaryColor};
      position: absolute;
      top: 20px;
      right: 20px;

      @media (min-width: 850px) {
        font-size: 10rem;
        top: 120px;
        right: 40px;
        font-size: 3rem;
        cursor: pointer;
      }
    }
  }
`;

export default ModalStyled;
