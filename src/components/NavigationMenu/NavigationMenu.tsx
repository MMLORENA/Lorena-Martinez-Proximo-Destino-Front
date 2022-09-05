import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { NavLink, useLocation } from "react-router-dom";

const NavigationMenu = () => {
  const { pathname } = useLocation();

  const noVisible = pathname === "/login" || pathname === "/registro";
  const isActive = pathname === "/destinos";

  return (
    <>
      {!noVisible && (
        <NavigationMenuStyled className="navigation">
          <NavLink
            className={`navigation__link${
              isActive ? " navigation__link--active" : ""
            } `}
            to="/destinos"
          >
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
      )}
    </>
  );
};
export default NavigationMenu;
