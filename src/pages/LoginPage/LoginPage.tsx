import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import Logo from "../../components/Logo/Logo";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginPageStyled>
        <div className="form__image"></div>
        <section className="form-section">
          <div className="form__title-container">
            <Logo />
            <h2 className="form__section-title">Acceso a tu</h2>
          </div>
          <Login />
          <section className="link__container">
            <span className="link__text">¿No tienes cuenta?</span>
            <Link to="/registro">
              <span className="link__link">Registrate</span>
            </Link>
          </section>
        </section>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
