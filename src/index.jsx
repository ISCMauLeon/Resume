import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./utils/i18n/i18n.js";
import "./index.css";


const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
