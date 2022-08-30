import "@fontsource/montserrat";
import Register from "./components/Register/Register";
import { ThemeProvider } from "styled-components";
import styledMainTheme from "./styledMainTheme";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <AppStyled>
        <Register />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
