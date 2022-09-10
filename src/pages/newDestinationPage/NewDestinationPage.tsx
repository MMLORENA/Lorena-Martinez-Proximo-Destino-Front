import Logo from "../../components/Logo/Logo";
import NewDestination from "../../components/NewDestination/NewDestination";
import NewDestinationPageStyled from "./NewDestinationPageStyled";

const NewDestinationPage = (): JSX.Element => {
  return (
    <>
      <NewDestinationPageStyled>
        <div className="form__image"></div>
        <section className="form-section">
          <div className="form__title-container">
            <h2 className="form__section-title">Crea tu</h2>
            <Logo />
          </div>
          <NewDestination />
        </section>
      </NewDestinationPageStyled>
    </>
  );
};

export default NewDestinationPage;
