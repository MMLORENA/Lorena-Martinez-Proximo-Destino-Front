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

  @media (min-width: 850px) {
    flex-direction: row;
    gap: 40px;
    width: 100%;
  }

  .modal {
    &__text {
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme.primaryColor};
      text-align: center;

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
        top: 20px;
        right: 40px;
        font-size: 3rem;
        cursor: pointer;
      }
    }
  }
`;

export default ModalStyled;
