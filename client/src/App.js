import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import themeSettings from "./theme";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/Layout/MainLayout";
import ExtractByCity from "./pages/ExtractByCity";
import ExtractByHotel from "./pages/ExtractByHotel";
import CompareTool from "./pages/CompareTool";

function App() {
  // Gets the current mode state from the redux store
  const theme = createTheme(themeSettings("dark"));

  // Learn why do we use <CssBaseline />  https://mui.com/material-ui/react-css-baseline/#approach
  // <Layout /> will be in every route nested inside it

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/extract/city" element={<ExtractByCity />}></Route>
            <Route path="/extract/hotel" element={<ExtractByHotel />}></Route>
            <Route path="/comparison" element={<CompareTool />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
