import "./bootstrap";

import React from "react";
import reactDom from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

reactDom.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
