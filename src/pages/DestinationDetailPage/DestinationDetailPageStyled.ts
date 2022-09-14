import styled from "styled-components";

const DestinationDetailPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 100%;
  position: relative;
  padding-bottom: 80px;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 0;
    padding-top: 6rem;
    position: inherit;
  }

  .main-title {
    width: 100%;

    @media (min-width: 850px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: flex-start;
      height: 100%;
    }

    &__image {
      width: 100%;
      object-fit: cover;

      @media (min-width: 850px) {
        width: 40rem;
        object-fit: cover;
        height: 100%;
      }
    }

    &__text {
      position: absolute;
      margin: 0;
      padding: 0 20px;
      color: ${(props) => props.theme.forthColor};
      font-size: 4rem;
      text-shadow: 11px 12px 10px ${(props) => props.theme.primaryColor};
      top: 161px;

      @media (min-width: 850px) {
        align-self: flex-end;
        top: auto;
        font-size: 6vw;
        left: 2rem;
      }
    }

    &__decoration {
      position: absolute;
      bottom: 0;
      border-radius: 18px;
      width: 100%;
      height: 140px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 69%,
        rgba(255, 255, 255, 0.5) 100%
      );

      @media (min-width: 850px) {
        display: none;
      }
    }
  }

  .main-container {
    width: 100%;
    position: absolute;
    top: 288px;
    padding: 20px;
    padding-bottom: 80px;

    @media (min-width: 850px) {
      width: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      position: inherit;
      height: 100%;
      width: 100%;
    }
  }
`;

export default DestinationDetailPageStyled;
