import ExitPage from "@/page/ExitPage";
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
      <ExitPage />
    </ThemeProvider>
  );
}

export default App;
