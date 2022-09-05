import { ProtoUserLogin, UserProto } from "../models/User";
import { useAppDispatch, useAppSelector } from "../hooks";
import decodeToken from "../../utils/decodeToken";
import { loginUserActionCreator } from "../reducer/userSlice";
import { openModalActionCreator } from "../reducer/uiSlice";
import { Modal } from "../interfaces/interfaces";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.ui);

  const getRegister = async (newUser: UserProto) => {
    try {
      const response = await fetch(`${url}user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.status !== 201) {
        throw new Error();
      }
    } catch (error) {
      return false;
    }
    return true;
  };

  const getLogin = async (userData: ProtoUserLogin) => {
    try {
      const responseData = await fetch(`${url}user/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (responseData.status !== 200) {
        throw new Error();
      }
      const {
        user: { token },
      } = await responseData.json();
      const userLoged = decodeToken(token);

      dispatch(loginUserActionCreator(userLoged.userName));
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      const modalError: Modal = {
        ...modal,
        isModalOpen: true,
        modalText: "Usuario o Contraseña no válidos",
        modalType: "error",
      };
      dispatch(openModalActionCreator(modalError));
    }
  };

  return { getRegister, getLogin };
};

export default useUser;
