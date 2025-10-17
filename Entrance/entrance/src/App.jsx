import EntrancePage from "@/page/EntrancePage";
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
      <EntrancePage />
    </ThemeProvider>
  );
}

export default App;
