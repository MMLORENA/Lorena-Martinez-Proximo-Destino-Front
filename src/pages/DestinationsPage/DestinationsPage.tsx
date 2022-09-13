import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import DestinationsList from "../../components/DestinationsList/DestinationsList";
import Logo from "../../components/Logo/Logo";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import DestinationPageStyled from "./DestinationsPageStyled";

const DestinationsPage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/crear");
  };

  return (
    <DestinationPageStyled>
      <Logo />
      <Button
        classNameTypeButton="small"
        buttonText="Nuevo Destino"
        actionOnclick={handleOnClick}
        type="button"
        isDisabled={false}
      />
      <DestinationsList />
      <NavigationMenu />
    </DestinationPageStyled>
  );
};
export default DestinationsPage;
