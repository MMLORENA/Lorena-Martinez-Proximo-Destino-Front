import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import DestinationCardStyled from "./DestinationCardStyled";

interface DestinationCardProps {
  categoryIcon: "beach" | "nature" | "adventure" | "urban" | "culture";
  category: "Playa" | "Naturaleza" | "Aventura" | "Urbano" | "Cultura";
  firstPlan: string;
  firstPlanDescription: string;
  secondPlan?: string;
  secondPlanDescription?: string;
  thirdPlan?: string;
  thirdPlanDescription?: string;
}

const DestinationCard = ({
  categoryIcon,
  category,
  firstPlan,
  firstPlanDescription,
  secondPlan,
  secondPlanDescription,
  thirdPlan,
  thirdPlanDescription,
}: DestinationCardProps) => {
  return (
    <DestinationCardStyled>
      <div className="category">
        <h2 className="category__title">{category}</h2>
        <img
          src={`/images/category-icons/${categoryIcon}.webp`}
          alt={`${category} icon`}
          className="category__icon"
        />
      </div>

      <ul className="plans">
        <li className="plan" key={firstPlan}>
          <div className="plan__title-container">
            <FontAwesomeIcon
              icon={faMapPin}
              className="plan__icon"
              data-testid="icon-pin-map"
            />
            <h3 className="plan__title">{firstPlan}</h3>
          </div>
          <p className="plan__description">{firstPlanDescription}</p>
        </li>
        {secondPlan && (
          <li className="plan__group" key={secondPlan}>
            <div className="plan__title-container">
              <FontAwesomeIcon
                icon={faMapPin}
                className="plan__icon"
                data-testid="icon-pin-map"
              />
              <h3 className="plan__title">{secondPlan}</h3>
            </div>
            <p className="plan__description">{secondPlanDescription}</p>
          </li>
        )}
        {thirdPlan && (
          <li className="plan__group" key={thirdPlan}>
            <div className="plan__title-container">
              <FontAwesomeIcon
                icon={faMapPin}
                className="plan__icon"
                data-testid="icon-pin-map"
              />
              <h3 className="plan__title">{thirdPlan}</h3>
            </div>
            <p className="plan__description">{thirdPlanDescription}</p>
          </li>
        )}
      </ul>
    </DestinationCardStyled>
  );
};

export default DestinationCard;
