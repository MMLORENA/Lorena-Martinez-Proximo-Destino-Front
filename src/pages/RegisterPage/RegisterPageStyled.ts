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
    height: 800px;
    gap: 20px;
  }

  .form-group-container {
    @media (min-width: 850px) {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }

  .title-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    @media (min-width: 850px) {
      align-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
      padding: 20px 0;
    }
  }

  .main-title {
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

  .section-title {
    font-size: 1.3 rem;
    align-self: center;
    padding: 10px;
    margin: 0 auto;

    @media (min-width: 850px) {
      width: 100%;
      order: 1;
    }
  }

  .image-container {
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

  .logo {
    width: 100%;
  }
`;
export default RegisterStyled;
