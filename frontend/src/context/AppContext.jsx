import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { MDBAlert } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const appContext = createContext();

function AppContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({ admin: false });
  const [basicDanger, setBasicDanger] = useState(false);
  const navigate = useNavigate();
  const getUsers = () => JSON.parse(localStorage.getItem("users") ?? "[]");

  const login = useCallback(
    (credentials) => {
      const users = getUsers();

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
          return navigate("/admin/demo");
        }
      }
      return navigate("/demo");
    },
    [navigate]
  );

  const register = useCallback((newUser) => {
    const users = getUsers();

    if (!users.find((userdb) => userdb.email === newUser.email)) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert(`Bienvenue ${newUser.email}`);
    } else {
      alert("Vous êtes déjà inscrit !");
    }
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
  }, []);

  // exemple méthodes pour communiquer avec une api

  const contextData = useMemo(
    () => ({ isAdmin, setIsAdmin, user, login, logout, register }),
    [isAdmin, setIsAdmin, user, login, logout, register]
  );

  return (
    <appContext.Provider value={contextData}>
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
}

AppContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppContextProvider;

export const useAppDemo = () => useContext(appContext);
