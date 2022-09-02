import { SyntheticEvent, useState } from "react";
import { UserProto } from "../../store/models/User";
import useUser from "../../store/hooks/useUser";
import Button from "../Button/Button";
import RegisterStyled from "./RegisterStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openModalActionCreator } from "../../store/reducer/uiSlice";
import { Modal } from "../../store/interfaces/interfaces";

const Register = () => {
  const { getRegister } = useUser();
  const { modal } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const initialUser: UserProto = {
    name: "",
    firstName: "",
    secondName: "",
    userName: "",
    password: "",
    repeatedPassword: "",
  };

  const initialFeedback = true;

  const modalError: Modal = {
    ...modal,
    isOpen: true,
    text: "Error al registrate",
    type: "error",
  };

  const [registerData, setRegisterData] = useState(initialUser);

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const isRegistered = await getRegister(registerData);
    setRegisterData(initialUser);

    if (!isRegistered) {
      dispatch(openModalActionCreator(modalError));
    }
  };

  const isSamePassword =
    registerData.password === registerData.repeatedPassword;

  const isFormValid = (): boolean =>
    registerData.userName !== "" &&
    registerData.name !== "" &&
    registerData.firstName !== "" &&
    registerData.password !== "" &&
    isSamePassword;
  return (
    <>
      <RegisterStyled onSubmit={handleSubmit} noValidate>
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
            autoComplete="off"
            className="form-group__input repeatedPassword"
          />
        </div>
        <Button
          classNameTypeButton="small"
          actionOnclick={() => {}}
          buttonText="Registrarme"
          type="submit"
          isDisabled={!isFormValid()}
        />
      </RegisterStyled>
    </>
  );
};

export default Register;
