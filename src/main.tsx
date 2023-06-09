import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
