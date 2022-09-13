import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import useDestinations from "../../store/hooks/useDestinations/useDestinations";
import { Destination } from "../../store/models/Destinations";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Button from "../../components/Button/Button";
import DestinationDetailPageStyled from "./DestinationDetailPageStyled";

const DestinationDetailPage = () => {
  const { idDestination } = useParams();
  const { getByIdDestination, deleteDestinations } = useDestinations();

  const urlAPI = process.env.REACT_APP_API_URL;

  const handleDeleteDestination = () => {
    deleteDestinations(idDestination!);
  };

  const initialDestination: Destination = {
    destination: "",
    category: "",
    longitude: 0,
    latitude: 0,
    firstPlan: "",
    secondPlan: "",
    thirdPlan: "",
    descriptionFirstPlan: "",
    descriptionSecondPlan: "",
    descriptionThirdPlan: "",
    id: "",
    image: "",
    backupImage: "",
  };

  const [destination, setDestination] = useState(initialDestination);

  useEffect(() => {
    (async () => {
      const { destination } = await getByIdDestination(idDestination!);
      setDestination(destination);
    })();
  }, [getByIdDestination, idDestination]);

  return (
    <DestinationDetailPageStyled>
      <section className="main-title">
        <img
          src={`${urlAPI}${destination.image}`}
          alt={destination.destination}
          className="main-title__image"
          width={280}
          height={320}
        />
        <h1 className="main-title__text">{destination.destination}</h1>
        <div className="main-title__decoration"></div>
      </section>

      <main className="main-container">
        <DestinationCard
          category={destination.category}
          firstPlan={destination.firstPlan}
          firstPlanDescription={destination.descriptionFirstPlan}
          secondPlan={destination.secondPlan}
          secondPlanDescription={destination.descriptionSecondPlan}
          thirdPlan={destination.descriptionThirdPlan}
          thirdPlanDescription={destination.descriptionThirdPlan}
        />
        <Button
          buttonText="Eliminar"
          type="button"
          classNameTypeButton="small"
          actionOnclick={handleDeleteDestination}
          isDisabled={false}
        />
      </main>
      <NavigationMenu />
    </DestinationDetailPageStyled>
  );
};

export default DestinationDetailPage;
