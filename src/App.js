import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GuestRoute from "./routes/GuestRoute";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import theme from "./theme";

import "./mock";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <GuestRoute path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>Not Found 404!</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
