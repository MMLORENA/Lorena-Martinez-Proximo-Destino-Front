import styled from "styled-components";

const PageNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 80px;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
  }

  .image-container {
    min-width: 200px;
    height: 250px;
    background-image: url("./images/pageNotFound.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;

    @media (min-width: 850px) {
      height: 100vh;
      flex: 2;
      background-size: cover;
      background-repeat: repeat;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 850px) {
      flex: 1.5;
      justify-content: center;
    }
  }

  .image-text {
    color: ${(props) => props.theme.errorColor};
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    display: inline;
    align-self: end;
    padding: 20px;

    @media (min-width: 850px) {
      size: 3rem;
      justify-content: center;
      align-self: end;
    }
  }

  .icon {
    width: 157px;
    height: 251px;

    @media (min-width: 850px) {
      width: 250px;
      height: 700px;
    }
  }

  .text {
    font-size: 3.5rem;
    overflow: hidden;
    padding: 20px;
    text-align: center;
    color: ${(props) => props.theme.primaryColor};
  }
`;
export default PageNotFoundStyled;
