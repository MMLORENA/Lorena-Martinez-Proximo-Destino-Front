import Register from "../../components/Register/Register";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterPageStyled className="title-container">
        <div className="image-container">
          <img
            src="./images/registerMbl.webp"
            alt="estrellas Via Lactea"
            className="image"
            height={250}
            loading="eager"
          />
        </div>
        <div className="title-container">
          <h1 className="main-title">Próximo Destino</h1>
          <h2 className="section-title">Registro</h2>
        </div>

        <Register />
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
