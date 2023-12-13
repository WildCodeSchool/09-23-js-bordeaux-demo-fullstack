import { createContext, useContext, useState } from "react";

const adminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);

  //méthodes supplémentaires pour protéger des routes liées à l'administrateur

  return (
    <adminContext.Provider value={{ isAdmin }}>
      {children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;

export const useAdmin = () => useContext(adminContext);
