import styled from "styled-components";

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 100vw;

  @media (orientation: landscape) {
    flex-wrap: wrap;
    align-content: flex-start;
    height: 800px;
  }

  .title-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    @media (orientation: landscape) {
      width: 500px;
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

    @media (orientation: landscape) {
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

    @media (orientation: landscape) {
      width: 100%;
      order: 1;
    }
  }

  .image-container {
    width: 100vw;
    min-width: 200px;
    height: 250px;
    background-image: url("./images/registerMbl.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    @media (orientation: landscape) {
      background-image: url("./images/registerDesk.webp");
      width: 400px;
      height: 100%;
      border-radius: 0 64px 64px 0;
    }
  }

  .logo {
    width: 100%;
  }
`;
export default RegisterStyled;
