import styled from "styled-components";
const DestinationCardStyled = styled.section`
  background-color: ${(props) => props.theme.forthColor};
  border-radius: 18px;
  min-width: 300px;

  .category {
    display: flex;
    justify-content: space-between;

    @media (min-width: 850px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    &__title {
      color: ${(props) => props.theme.secondaryColor};
      font-weight: 700;
      padding: 20px;
    }

    &__title::first-letter {
      text-transform: capitalize;
    }

    &__icon {
      object-fit: none;
      padding-right: 48px;

      @media (min-width: 850px) {
        padding: 0;
      }
    }
  }

  .plans {
    list-style: none;
    padding: 0;
  }

  .plan {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 850px) {
      list-style: none;
    }

    &__title-container {
      display: flex;
      width: 100%;
      align-items: center;
    }

    &__icon {
      padding: 20px;
      color: ${(props) => props.theme.secondaryColor};
    }

    &__title {
      margin: 0;
    }
    &__description {
      overflow: hidden;
      margin: 0;
      padding: 10px 48px;
    }
  }
`;

export default DestinationCardStyled;
