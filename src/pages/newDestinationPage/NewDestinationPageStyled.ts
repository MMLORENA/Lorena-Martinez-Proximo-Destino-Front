import styled from "styled-components";

const NewDestinationPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 100%;
  padding-bottom: 5em;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    padding-top: 5em;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 850px) {
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 10px 60px;
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
      padding: 0;
      display: block;
    }
  }

  .form__section-title {
    font-size: 1.3 rem;
    align-self: center;
    padding: 10px;
    margin: 0 auto;

    @media (min-width: 850px) {
      order: 1;
      padding: 0;
      display: block;
      margin: 0;
    }
  }

  .form__image {
    width: 100%;
    min-width: 200px;
    height: 250px;
    background-image: url("./images/createMbl.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    @media (min-width: 850px) {
      background-image: url("./images/createDesk.webp");
      border-radius: 0 64px 64px 0;
      height: 100%;
      flex: 1.2;
    }
  }
`;
export default NewDestinationPageStyled;
