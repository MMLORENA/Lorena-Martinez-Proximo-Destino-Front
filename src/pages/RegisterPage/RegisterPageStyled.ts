import styled from "styled-components";

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-title {
    font-weight: 100;
    font-size: 20px;
    align-self: center;
    padding: 10 px;
    margin: 0 auto;
  }

  .image-container {
    height: 250px;
    width: 100vw;
  }

  .title-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .logo {
    width: 100%;
  }

  .section-title {
    font-size: 1.3 rem;
    align-self: center;
    padding: 10px;
    margin: 0 auto;
  }
`;
export default RegisterStyled;
