import React, { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";
import "./../public/styles.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>

)



