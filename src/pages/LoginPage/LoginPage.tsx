import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginPageStyled className="register-page">
        <div className="form__image"></div>
        <section className="form-section">
          <div className="form__title-container">
            <h1 className="form__main-title">Próximo Destino</h1>
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
