import styled from "styled-components";

const RegisterStyled = styled.div`
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
    gap: 20px;
    height: 100%;
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
      align-content: flex-start;
      flex-direction: column-reverse;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 30px 0;
    }
  }

  .form__main-title {
    font-weight: 100;
    font-size: 20px;
    align-self: center;
    padding: 10 px;
    margin: 0 auto;

    @media (min-width: 850px) {
      width: 100%;
      order: 2;
      padding: 0 80px;
    }
  }

  .form__section-title {
    font-size: 1.3 rem;
    align-self: center;
    padding: 10px;
    margin: 0 auto;

    @media (min-width: 850px) {
      width: 100%;
      order: 1;
      padding: 0 60px;
    }
  }

  .form__image {
    width: 100%;
    min-width: 200px;
    height: 250px;
    background-image: url("./images/registerMbl.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    @media (min-width: 850px) {
      background-image: url("./images/registerDesk.webp");
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
    padding: 10px;

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
export default RegisterStyled;
