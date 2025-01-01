import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { App } from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-q1w572twl5iiov1b.us.auth0.com"
      clientId="hSX2tK819hNNPSAzxDioQGIaXY8k3dJR"
      authorizationParams={{
        redirect_uri: "https://sso-poc-ahmed-lukman.vercel.app",
        organization: "org_OPlZYBfFFpXBc8Cp",
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
