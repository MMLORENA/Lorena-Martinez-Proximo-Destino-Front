import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Feedback, Modal } from "../../interfaces/interfaces";
import {
  deleteDestinationActionCreator,
  loadDestinationsActionCreator,
} from "../../reducer/destinationsSlice/destinationsSlice";
import {
  closeModalActionCreator,
  openFeedbackActionCreator,
  openModalActionCreator,
} from "../../reducer/uiSlice/uiSlice";

const useDestinations = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

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

      dispatch(closeModalActionCreator());
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

  const deleteDestinations = async (idDestination: string) => {
    try {
      const feedbackDeleted: Feedback = {
        feedbackText: "ha sido eliminado",
        feedbackType: "message",
        isFeedbackOpen: true,
      };

      const response = await fetch(
        `${urlAPI}destinations/delete/${idDestination}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      dispatch(deleteDestinationActionCreator(idDestination));
      dispatch(openFeedbackActionCreator(feedbackDeleted));
    } catch {
      const errorModal: Modal = {
        isModalOpen: true,
        modalText: "!Algo ha salido mal¡",
        modalType: "error",
      };

      dispatch(openModalActionCreator(errorModal));
    }
  };

  const createDestination = async (formData: FormData) => {
    const feedbackCreated: Feedback = {
      feedbackText: "ha sido creado",
      feedbackType: "message",
      isFeedbackOpen: true,
    };

    try {
      const response = await fetch(`${urlAPI}destinations/create`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error();
      }

      dispatch(openFeedbackActionCreator(feedbackCreated));
      navigate("/destinos");
    } catch {
      const errorModal: Modal = {
        isModalOpen: true,
        modalText: "!Algo ha salido mal¡",
        modalType: "error",
      };

      dispatch(openModalActionCreator(errorModal));
    }
  };

  const getByIdDestination = useCallback(
    async (idDestination: string) => {
      try {
        const response = await fetch(`${urlAPI}destinations/${idDestination}`, {
          headers: { authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error();
        }

        const destination = await response.json();

        return destination;
      } catch (error) {
        const errorModal: Modal = {
          isModalOpen: true,
          modalText: "!Algo ha salido mal¡",
          modalType: "error",
        };

        dispatch(openModalActionCreator(errorModal));
      }
    },
    [dispatch, token, urlAPI]
  );
  return {
    getUserDestinations,
    deleteDestinations,
    createDestination,
    getByIdDestination,
  };
};

export default useDestinations;
