import "@fontsource/montserrat";
import { ThemeProvider } from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import styledMainTheme from "./styledMainTheme";
import AppStyled from "./AppStyled";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import FeedbackModal from "./components/FeedbackModal/FeedbackModal";
import DestinationsPage from "./pages/DestinationsPage/DestinationsPage";
import useToken from "./store/hooks/useToken/useToken";
import NewDestinationPage from "./pages/newDestinationPage/NewDestinationPage";
import DestinationDetailPage from "./pages/DestinationDetailPage/DestinationDetailPage";

const App = () => {
  const {
    modal: { isModalOpen, modalType, modalText },
    feedback: { isFeedbackOpen, feedbackText, feedbackType },
  } = useAppSelector((state) => state.ui);

  const { getToken } = useToken();

  getToken();

  return (
    <ThemeProvider theme={styledMainTheme}>
      <AppStyled>
        {isFeedbackOpen && (
          <FeedbackModal type={feedbackType} text={feedbackText} />
        )}
        {isModalOpen && <Modal type={modalType} text={modalText} />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/destinos" element={<DestinationsPage />} />
          <Route path="/crear" element={<NewDestinationPage />} />
          <Route
            path="/destinos/:idDestination"
            element={<DestinationDetailPage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
