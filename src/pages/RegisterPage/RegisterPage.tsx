import { Link } from "react-router-dom";
import Register from "../../components/Register/Register";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterPageStyled className="register-page">
        <div className="form__image"></div>
        <div className="form-section">
          <div className="form__title-container">
            <h1 className="form__main-title">Próximo Destino</h1>
            <h2 className="form__section-title">Registro</h2>
          </div>
          <Register />
          <section className="link__container">
            <span className="link__text">¿Ya tienes cuenta?</span>
            <Link to="/login">
              <span className="link__link">Acceder</span>
            </Link>
          </section>
        </div>
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
