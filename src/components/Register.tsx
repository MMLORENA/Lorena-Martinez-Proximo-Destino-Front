import RegisterStyled from "./RegisterStyled";

const Register = () => {
  return (
    <>
      <RegisterStyled>
        <div className="container register-container">
          <form className="register-form">
            <div className="form-group">
              <label className="form-group__label" htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="¿Cómo te llamas?"
                required
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="firstName">
                1º Apellido
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="1º Apellido"
                required
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="secondName">
                2º Apellido
              </label>
              <input
                type="text"
                id="secondName"
                placeholder="2º Apellido"
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="usuario">
                Usuario
              </label>
              <input
                type="text"
                id="usuario"
                placeholder="¿Tu nombre de usuario?"
                required
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="Escribe tu contraseña"
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="repeteadPassword">
                Repite Contraseña
              </label>
              <input
                type="password"
                id="repeteadPassword"
                placeholder="Repite tu contraseña"
                required
                autoComplete="off"
                className="form-group__input"
              />
            </div>
          </form>
        </div>
      </RegisterStyled>
    </>
  );
};

export default Register;
