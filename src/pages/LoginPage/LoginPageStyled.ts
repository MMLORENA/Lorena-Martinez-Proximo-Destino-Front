import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 100%;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 100%;
    gap: 20px;
  }

  .form-section {
    @media (min-width: 850px) {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }

  .form__title-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    @media (min-width: 850px) {
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: no-wrap;
      align-items: flex-start;
      justify-content: space-around;
      gap: 20px;
    }
  }

  .form__main-title {
    font-weight: 100;
    font-size: 20px;
    align-self: center;
    padding: 10 px;
    margin: 0 auto;

    @media (min-width: 850px) {
      margin: 0;
    }
  }

  .form__section-title {
    font-size: 1.3 rem;
    align-self: center;
    padding: 5px;
    margin: 0 auto;

    @media (min-width: 850px) {
      white-space: nowrap;
      padding: 0;
      margin: 0;
    }
  }

  .form__image {
    width: 100%;
    min-width: 200px;
    height: 200px;
    background-image: url("./images/loginMbl.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    @media (min-width: 850px) {
      background-image: url("./images/loginDesk.webp");
      height: 100%;
      border-radius: 0 64px 64px 0;
      flex: 1.2;
    }
  }

  .link__container {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: column;

    @media (min-width: 850px) {
      flex-direction: row;
      justify-content: center;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.secondaryColor};
  }

  .link__link {
    font-size: 1rem;
    font-weight: bold;
  }
`;
export default LoginStyled;
