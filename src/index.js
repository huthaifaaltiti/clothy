// react
import React from "react";

// react-router-dom
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

// store, react-redux, redux-persist
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
