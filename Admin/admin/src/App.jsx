import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterData } from "@/routes/RouterData";
import "./fonts.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Oagothic", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {RouterData.map((route, idx) => (
            <Route key={idx} path={route.link} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
