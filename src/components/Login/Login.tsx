import { SyntheticEvent, useState } from "react";
import useUser from "../../store/hooks/useUser";
import { ProtoUserLogin } from "../../store/models/User";
import Button from "../Button/Button";
import LoginStyled from "./LoginStyled";

const Login = () => {
  const { getLogin } = useUser();

  const initialUser: ProtoUserLogin = {
    userName: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialUser);

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await getLogin(loginData);
    setLoginData(initialUser);
  };

  const isFormValid = (): boolean =>
    loginData.userName !== "" && loginData.password !== "";

  return (
    <>
      <LoginStyled onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-group__label" htmlFor="userName">
            Usuario
          </label>
          <input
            type="text"
            id="userName"
            placeholder="¿Tu nombre de Usuario?"
            value={loginData.userName}
            onChange={handleChangeForm}
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
            value={loginData.password}
            onChange={handleChangeForm}
            id="password"
            placeholder="Escribe tu contraseña"
            autoComplete="off"
            className="form-group__input"
          />
        </div>

        <Button
          classNameTypeButton="small"
          actionOnclick={() => {}}
          buttonText="Inicia Sesión"
          type="submit"
          isDisabled={!isFormValid()}
        />
      </LoginStyled>
    </>
  );
};

export default Login;
