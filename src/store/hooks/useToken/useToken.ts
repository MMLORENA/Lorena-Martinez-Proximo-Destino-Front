import { useAppDispatch } from "../../hooks";
import { loginUserActionCreator } from "../../reducer/userSlice/userSlice";
import decodeToken from "../../../utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const isToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator(user));
    }
  };

  return { isToken };
};

export default useToken;
