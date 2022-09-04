import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <>
      <NavigationMenuStyled className="navigation">
        <NavLink className="navigation__link" to="/destinos">
          <FontAwesomeIcon
            icon={faHouse}
            className="navigation__icon"
            data-testid="house__icon"
          />
          <span className="navigation__text">Destinos</span>
        </NavLink>
        <NavLink className="navigation__link" to="/login">
          <FontAwesomeIcon
            icon={faUser}
            className="navigation__icon"
            data-testid="user__icon"
          />
          <span className="navigation__text">Logout</span>
        </NavLink>
      </NavigationMenuStyled>
    </>
  );
};
export default NavigationMenu;
