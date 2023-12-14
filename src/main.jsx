import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "mdb-react-ui-kit/dist/css/mdb.dark.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-multi-carousel/dist/css/multi-carousel.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import Demo from "./components/Demo.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import Admin from "./components/Admin.jsx";
import AdminDemo from "./components/AdminDemo.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContextProvider>
        <App />
      </AppContextProvider>
    ),
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
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
