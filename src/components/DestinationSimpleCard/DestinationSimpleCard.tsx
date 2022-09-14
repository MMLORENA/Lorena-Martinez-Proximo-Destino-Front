import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DestinationSimpleCardStyled from "./DestinationSimpleCardStyled";
import useDestinations from "../../store/hooks/useDestinations/useDestinations";
import { useNavigate } from "react-router-dom";

interface DestinationSimpleCardProps {
  picture: string;
  title: string;
  id: string;
  backup: string;
}

const DestinationSimpleCard = ({
  picture,
  title,
  id,
  backup,
}: DestinationSimpleCardProps) => {
  const { deleteDestinations } = useDestinations();
  const navigate = useNavigate();

  const handleDeleteDestination = () => {
    deleteDestinations(id);
  };

  const handleToDetails = () => {
    navigate(`/destinos/${id}`);
  };
  return (
    <DestinationSimpleCardStyled className="destination-simple" key={id}>
      <div
        className="destination-simple__image-container"
        onClick={handleToDetails}
        data-testid="img-container"
      ></div>

      <img
        src={backup}
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
