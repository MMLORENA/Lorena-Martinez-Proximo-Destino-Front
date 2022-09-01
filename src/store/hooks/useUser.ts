import { UserProto } from "../models/User";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL as string;

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

  return { getRegister };
};

export default useUser;
