import { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  //exemple méthodes pour communiquer avec une api

  return (
    <appContext.Provider value={{ isAdmin }}>{children}</appContext.Provider>
  );
};

export default AppContextProvider;

export const useAppDemo = () => useContext(appContext);
