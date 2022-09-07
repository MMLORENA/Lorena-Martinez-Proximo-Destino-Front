import DestinationsListCardStyled from "./DestinationsListStyled";

const DestinationsList = () => {
  return (
    <DestinationsListCardStyled>
      <section className="notDestinations">
        <img
          src="./images/NotDestinations.png"
          alt="icono mundo con un avión a su alrededor"
          className="notDestinations__image"
        />
        <span className="notDestinations__text">¿Tú Próximo Destino?</span>
      </section>
    </DestinationsListCardStyled>
  );
};
export default DestinationsList;
