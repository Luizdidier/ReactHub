import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "@sweetalert2/theme-dark/dark.scss";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
