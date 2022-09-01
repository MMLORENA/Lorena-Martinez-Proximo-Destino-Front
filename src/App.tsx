import "@fontsource/montserrat";
import { ThemeProvider } from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import styledMainTheme from "./styledMainTheme";
import AppStyled from "./AppStyled";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const {
    modal: { isOpen, type, text },
  } = useAppSelector((state) => state.ui);

  return (
    <ThemeProvider theme={styledMainTheme}>
      <AppStyled>
        {isOpen && <Modal type={type} text={"hola"} />}
        <Routes>
          <Route path="/" element={<Navigate to="/registro" />} />
          <Route path="/:registro" element={<RegisterPage />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
