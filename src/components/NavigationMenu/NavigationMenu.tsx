import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { NavLink, useLocation } from "react-router-dom";
import useUser from "../../store/hooks/useUser";
import Logo from "../Logo/Logo";

const NavigationMenu = () => {
  const { pathname } = useLocation();
  const { getLogout } = useUser();

  const isActive = pathname === "/destinos";

  const handleLogout = () => {
    getLogout();
  };

  return (
    <>
      <NavigationMenuStyled>
        <nav className="navigation">
          <NavLink
            to={"/destinos"}
            className={`navigation__link${
              isActive ? " navigation__link--active" : ""
            } `}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="navigation__icon"
              data-testid="house__icon"
            />
            <span className="navigation__text">Destinos</span>
          </NavLink>
          <NavLink
            to={"/login"}
            className="navigation__link"
            onClick={handleLogout}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="navigation__icon"
              data-testid="user__icon"
            />
            <span className="navigation__text">Logout</span>
          </NavLink>
        </nav>
        <Logo />
      </NavigationMenuStyled>
    </>
  );
};
export default NavigationMenu;
