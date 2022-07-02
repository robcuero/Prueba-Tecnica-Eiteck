import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { CalendarLists } from "./components/organisms/calendarList";
import { store } from "./store";

import "./assets/sass/index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
