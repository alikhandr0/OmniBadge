import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThirdwebProvider } from "thirdweb/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Вот та самая обертка (Provider) */}
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);