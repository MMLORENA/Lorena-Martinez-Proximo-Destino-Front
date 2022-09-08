import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Modal } from "../../interfaces/interfaces";
import { loadDestinationsActionCreator } from "../../reducer/destinationsSlice/destinationsSlice";
import { openModalActionCreator } from "../../reducer/uiSlice/uiSlice";

const useDestinations = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const getUserDestinations = useCallback(async () => {
    const loadingModal: Modal = {
      isModalOpen: true,
      modalText: "Llegando a tu destino...",
      modalType: "loading",
    };
    dispatch(openModalActionCreator(loadingModal));
    try {
      const response = await fetch(`${urlAPI}destinations/`, {
        headers: { authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error();
      }

      const { destinations } = await response.json();
      dispatch(loadDestinationsActionCreator(destinations));
    } catch {
      const errorModal: Modal = {
        isModalOpen: true,
        modalText: "!Algo ha salido mal¡",
        modalType: "error",
      };

      dispatch(openModalActionCreator(errorModal));
    }
  }, [urlAPI, dispatch, token]);

  return { getUserDestinations };
};

export default useDestinations;
