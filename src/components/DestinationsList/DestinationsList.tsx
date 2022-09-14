import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import useDestinations from "../../store/hooks/useDestinations/useDestinations";
import { DestinationSimple } from "../../store/models/Destinations";
import DestinationSimpleCard from "../DestinationSimpleCard/DestinationSimpleCard";
import DestinationsListCardStyled from "./DestinationsListStyled";

const DestinationsList = () => {
  const { getUserDestinations } = useDestinations();
  const destinations = useAppSelector((state) => state.destinations);

  useEffect(() => {
    getUserDestinations();
  }, [getUserDestinations]);

  const isDestinationsEmpty = destinations.length === 0;

  return (
    <>
      {isDestinationsEmpty ? (
        <DestinationsListCardStyled>
          <li className="notDestinations">
            <img
              src="./images/NotDestinations.webp"
              alt="icono mundo con un avión a su alrededor"
              className="notDestinations__image"
            />
            <span className="notDestinations__text">¿Tú Próximo Destino?</span>
          </li>
        </DestinationsListCardStyled>
      ) : (
        <DestinationsListCardStyled>
          {destinations.map(
            ({ destination, id, image, backupImage }: DestinationSimple) => (
              <DestinationSimpleCard
                key={id}
                id={id}
                picture={image}
                title={destination}
                backup={backupImage}
              />
            )
          )}
        </DestinationsListCardStyled>
      )}
    </>
  );
};

export default DestinationsList;
