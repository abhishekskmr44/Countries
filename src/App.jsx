import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness2Icon from '@mui/icons-material/Brightness2';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="darkIcon">
          <IconButton id="dark-mode" onClick={() => setDarkMode(!darkMode)}>
            {theme.palette.mode == "dark" ? <LightModeIcon /> : <Brightness2Icon />}
          </IconButton>
        </div>
        <MainRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
