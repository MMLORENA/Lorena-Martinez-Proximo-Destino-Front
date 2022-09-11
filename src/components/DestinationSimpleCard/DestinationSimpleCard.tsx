import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DestinationSimpleCardStyled from "./DestinationSimpleCardStyled";
import useDestinations from "../../store/hooks/useDestinations/useDestinations";

interface DestinationSimpleCardProps {
  picture: string;
  title: string;
  id: string;
}

const DestinationSimpleCard = ({
  picture,
  title,
  id,
}: DestinationSimpleCardProps) => {
  const { deleteDestinations } = useDestinations();

  const handleDeleteDestination = () => {
    deleteDestinations(id);
  };
  return (
    <DestinationSimpleCardStyled className="destination-simple" key={id}>
      <div className="destination-simple__image-container"></div>
      <img
        src={picture}
        alt={title}
        className="destination-simple__image"
        width={280}
        height={320}
      />
      <FontAwesomeIcon
        icon={faTrashCan}
        className="destination-simple__icon"
        data-testid="icon-trash"
        onClick={handleDeleteDestination}
      />
      <h2 className="destination-simple__title">{title}</h2>
    </DestinationSimpleCardStyled>
  );
};

export default DestinationSimpleCard;
