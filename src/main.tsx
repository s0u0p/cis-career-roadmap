<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { AssessmentProvider } from "./app/context/AssessmentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AssessmentProvider>
    <App />
  </AssessmentProvider>
);
=======

  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
