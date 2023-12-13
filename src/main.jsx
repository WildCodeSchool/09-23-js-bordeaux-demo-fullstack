import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import Demo from "./components/Demo.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import Admin from "./components/Admin.jsx";
import AdminDemo from "./components/AdminDemo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContextProvider>
        <App />
      </AppContextProvider>
    ),
    children: [
      { path: "/demo", element: <Demo /> },
      {
        path: "/admin",
        element: (
          <AdminContextProvider>
            <Admin />
          </AdminContextProvider>
        ),
        children: [{ path: "/admin/demo", element: <AdminDemo /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
