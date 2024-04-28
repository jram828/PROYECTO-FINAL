import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <GoogleOAuthProvider clientId="971109439670-jt87eccbs1qqasho052qnuu0s299e6lo.apps.googleusercontent.com">
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);
