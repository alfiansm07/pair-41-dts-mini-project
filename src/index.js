import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Register from "./containers/Register";
import MovieDetailPage from "./containers/MovieDetailPage";
import Login from "./containers/Login";
import ProtectedComponent from "./components/ProtectedComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <ProtectedComponent>
            <App />
          </ProtectedComponent>
          } />
          <Route path="register" element={<Register />} />
          <Route path="moviedetailpage" element={<MovieDetailPage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
