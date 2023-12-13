import { createContext, useContext, useState } from "react";
import { useAppDemo } from "./AppContext";
import { Navigate } from "react-router-dom";
const adminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const appContext = useAppDemo();

  console.log(appContext);
  if (appContext.user.admin === false) {
    return <Navigate to="/demo" />;
  }

  //méthodes supplémentaires pour protéger des routes liées à l'administrateur

  return (
    <adminContext.Provider value={{ isAdmin }}>
      {children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;

export const useAdmin = () => useContext(adminContext);
