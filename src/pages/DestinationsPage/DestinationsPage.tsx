import DestinationsList from "../../components/DestinationsList/DestinationsList";
import Logo from "../../components/Logo/Logo";
import DestinationPageStyled from "./DestinationsPageStyled";

const DestinationsPage = () => {
  return (
    <DestinationPageStyled className="DestinationsPage">
      <Logo />
      <DestinationsList />
    </DestinationPageStyled>
  );
};
export default DestinationsPage;
