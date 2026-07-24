import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { RecipeProvider } from "./context/RecipeContext";
import App from "./App";
import "./index.css";

// Inizializzazione Sentry per l'error tracking.
// Il DSN viene letto da una variabile d'ambiente, mai scritto qui in chiaro.
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  sendDefaultPii: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </BrowserRouter>
  </StrictMode>
);
