import { useState } from "react";
import UserProto from "../../store/models/User";
import RegisterStyled from "./RegisterStyled";

const Register = () => {
  const initialUser: UserProto = {
    name: "",
    firstName: "",
    secondName: "",
    userName: "",
    password: "",
    repeatedPassword: "",
  };

  const [registerData, setRegisterData] = useState(initialUser);

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <RegisterStyled>
        <div className="container register-container">
          <form className="register-form">
            <div className="form-group">
              <label className="form-group__label" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="¿Cómo te llamas?"
                value={registerData.name}
                onChange={handleChangeForm}
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
                value={registerData.firstName}
                onChange={handleChangeForm}
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
                value={registerData.secondName}
                onChange={handleChangeForm}
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="userName">
                Usuario
              </label>
              <input
                type="text"
                id="userName"
                placeholder="¿Tu nombre de usuario?"
                value={registerData.userName}
                onChange={handleChangeForm}
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
                value={registerData.password}
                onChange={handleChangeForm}
                id="password"
                placeholder="Escribe tu contraseña"
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="repeatedPassword">
                Repite Contraseña
              </label>
              <input
                type="password"
                id="repeatedPassword"
                placeholder="Repite tu contraseña"
                value={registerData.repeatedPassword}
                onChange={handleChangeForm}
                required
                autoComplete="off"
                className="form-group__input"
              />
            </div>
            <button>Registrarme</button>
          </form>
        </div>
      </RegisterStyled>
    </>
  );
};

export default Register;
