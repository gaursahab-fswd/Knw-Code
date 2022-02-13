import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configStore } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
//import { store, persistor } from "./Redux/store";

const { store } = configStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
        <App />
   
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
