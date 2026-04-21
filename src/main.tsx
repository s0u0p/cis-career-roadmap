import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { AssessmentProvider } from "./app/context/AssessmentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AssessmentProvider>
    <App />
  </AssessmentProvider>
);
