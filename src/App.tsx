import "@fontsource/montserrat";
import { ThemeProvider } from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import styledMainTheme from "./styledMainTheme";
import AppStyled from "./AppStyled";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <AppStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/registro" />} />
          <Route path="/:registro" element={<RegisterPage />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
