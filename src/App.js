import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "@sweetalert2/theme-dark/dark.scss";
import { useSelector } from "react-redux";
import { Loading } from "./components/molecules/";
import { getGithubReducer } from "./services/selectors";

function App() {
  const { loading } = useSelector(getGithubReducer);
  return (
    <Router>
      <Loading active={loading} />
      <Routes />
    </Router>
  );
}

export default App;
