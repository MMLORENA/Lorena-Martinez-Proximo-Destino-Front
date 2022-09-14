import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../store/hooks/useUser";

const NavigationMenu = () => {
  const { pathname } = useLocation();
  const { getLogout } = useUser();

  const isActive = pathname === "/destinos";

  const handleLogout = () => {
    getLogout();
  };

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/destinos");
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
        <div
          onClick={handleOnClick}
          className="navigation__logo"
          data-testid="navigation__logo"
        ></div>
      </NavigationMenuStyled>
    </>
  );
};
export default NavigationMenu;
