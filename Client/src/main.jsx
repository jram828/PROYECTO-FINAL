import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <GoogleOAuthProvider clientId="526585059274-7hpu57211jdp1ivjc0bec7ba5jkpcdaa.apps.googleusercontent.com">
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // </GoogleOAuthProvider>
  <Auth0Provider
    domain="dev-775klnkxc5s72nhv.us.auth0.com"
    clientId="4wGkjRgEWRfdFNtdeAg48PWXFIsIuq2j"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* // </GoogleOAuthProvider> */}
  </Auth0Provider>
);

