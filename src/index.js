import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
