import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
//import { Provider } from "react-redux";
//import store from "./redux/store";
//import {Auth0Provider} from "@auth0/auth0-react";

const container = document.getElementById("root");
const root = createRoot(container);

const GOOGLE_CLIENT_ID="526585059274-7hpu57211jdp1ivjc0bec7ba5jkpcdaa.apps.googleusercontent.com"

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </GoogleOAuthProvider>
);


  