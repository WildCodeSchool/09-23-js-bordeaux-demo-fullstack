import { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({ admin: false });

  const login = () => {
    setUser({ admin: true });
  };

  const logout = () => {
    setUser({ admin: false });
  };

  //exemple méthodes pour communiquer avec une api

  return (
    <appContext.Provider value={{ isAdmin, user, login, logout }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;

export const useAppDemo = () => useContext(appContext);
