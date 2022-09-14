import { useAppDispatch } from "../../hooks";
import { loginUserActionCreator } from "../../reducer/userSlice/userSlice";
import decodeToken from "../../../utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator(user));
    }
  };

  return { getToken };
};

export default useToken;
