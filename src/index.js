import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store"

const Root = () => {
  return (
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
