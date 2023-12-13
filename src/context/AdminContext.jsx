import { createContext, useContext, useState } from "react";

const adminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <adminContext.Provider value={{ isAdmin }}>
      {children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;

export const useAdmin = () => useContext(adminContext);
