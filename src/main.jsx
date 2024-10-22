import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./context/UserContext/UserContext.jsx";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <RouterProvider router={Routes} />
        </UserProvider>
    </React.StrictMode>
);
