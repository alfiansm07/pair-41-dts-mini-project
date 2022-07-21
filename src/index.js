import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import ProtectedComponent from "./components/ProtectedComponent";
import Login from "./containers/Login";
import MovieDetailPage from "./containers/MovieDetailPage";
import NotFound404 from "./containers/NotFound404";
import Register from "./containers/Register";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedComponent>
                <App />
              </ProtectedComponent>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="moviedetailpage" element={<MovieDetailPage />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound404 />} />
          <Route
            path="/movie/:movieId"
            element={
              <ProtectedComponent>
                <MovieDetailPage />
              </ProtectedComponent>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
