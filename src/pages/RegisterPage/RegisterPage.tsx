import Register from "../../components/Register/Register";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterPageStyled>
        <div className="image-container"></div>
        <div className="form-group-container">
          <div className="title-container">
            <h1 className="main-title">Próximo Destino</h1>
            <h2 className="section-title">Registro</h2>
          </div>
          <Register />
        </div>
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
