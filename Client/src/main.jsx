import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
//import {Auth0Provider} from "@auth0/auth0-react";
const container = document.getElementById("root");
const root = createRoot(container);
const { GOOGLE_CLIENT_ID } = import.meta.env.VITE_GOOGLE_CLIENT_ID;

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
   </GoogleOAuthProvider>
);


  