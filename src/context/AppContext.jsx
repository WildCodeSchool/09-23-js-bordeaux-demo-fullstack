import { createContext, useContext, useState } from "react";
import { MDBAlert } from "mdb-react-ui-kit";
import { Navigate, useNavigate } from "react-router-dom";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({ admin: false });
  const [basicDanger, setBasicDanger] = useState(false);
  const navigate = useNavigate();
  const getUsers = () => JSON.parse(localStorage.getItem("users") ?? "[]");

  const login = (credentials) => {
    // setUser({ admin: true });
    const users = getUsers();
    console.log(users);

    const memoryUser = users.find(
      (userdb) =>
        userdb.email === credentials.email &&
        userdb.password === credentials.password
    );

    if (!memoryUser) {
      alert("Identifiants incorrects !");
    } else {
      alert(`Content de vous revoir ${credentials.email}`);
      setUser(memoryUser);

      if (memoryUser.admin) {
        console.log(memoryUser);
        return navigate("/admin/demo");
      }
      return navigate("/demo");
    }
  };

  const register = (user) => {
    console.log(user);
    const users = getUsers();
    console.log(users);

    if (!users.find((userdb) => userdb.email === user.email)) {
      users.push(user);
      console.log(users);
      localStorage.setItem("users", JSON.stringify(users));
      alert(`Bienvenue ${user.email}`);
    } else {
      alert("Vous êtes déjà inscrit !");
    }
  };

  const logout = () => {
    setUser({ admin: false });
  };

  //exemple méthodes pour communiquer avec une api

  return (
    <appContext.Provider value={{ isAdmin, user, login, logout, register }}>
      {children}
      <MDBAlert
        color="danger"
        autohide
        position="top-right"
        delay={2000}
        appendToBody
        open={basicDanger}
        onClose={() => setBasicDanger(false)}
      >
        Identifiants incorrects !
      </MDBAlert>
    </appContext.Provider>
  );
};

export default AppContextProvider;

export const useAppDemo = () => useContext(appContext);
