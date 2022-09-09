import styled from "styled-components";
const DestinationSimpleCardStyled = styled.li`
  padding: 0;
  list-style: none;
  position: relative;
  border-radius: 18px;
  width: fit-content;
  height: fit-content;
  display: grid;
  place-items: center;

  .destination-simple {
    &__image-container {
      background-color: black;
      border-radius: 20px;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0.3;
    }

    &__image {
      border-radius: 20px;
      min-width: 17.5rem;
      min-height: 20rem;
      object-fit: cover;

      @media (min-width: 850px) {
        height: 17rem;
        width: 14.5rem;
      }
    }
    &__title {
      position: absolute;
      margin: 0;
      color: ${(props) => props.theme.forthColor};
      font-size: 2.5rem;
      text-shadow: 8px 10px 28px ${(props) => props.theme.primaryColor};
    }

    &__icon {
      position: absolute;
      bottom: 10px;
      right: 15px;
      font-size: 3rem;
      color: ${(props) => props.theme.secondaryColorVariant};

      @media (min-width: 850px) {
        cursor: pointer;
      }
    }
  }
`;

export default DestinationSimpleCardStyled;
