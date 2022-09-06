import styled from "styled-components";
const FeedbackModalStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(212, 140, 0, 0.8);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .feedback__container {
    background-color: ${(props) => props.theme.forthColor};
    border: 4px ${(props) => props.theme.correctColor} solid;
    min-width: 18rem;
    min-height: 16rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;

    @media (min-width: 850px) {
      min-width: 30rem;
      min-height: 30rem;
    }
  }
  .feedback__icon-cross {
    color: ${(props) => props.theme.secondaryColor};
    align-self: center;
    font-size: 2.5rem;
    position: absolute;
    top: 30px;
    right: 30px;

    @media (min-width: 850px) {
      cursor: pointer;
    }
  }

  .feedback__text {
    font-size: 2rem;

    @media (min-width: 850px) {
      font-size: 3rem;
    }
  }

  .feedback__emoji {
    font-size: 2rem;
  }
`;

export default FeedbackModalStyled;
