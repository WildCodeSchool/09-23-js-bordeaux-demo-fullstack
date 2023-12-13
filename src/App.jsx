import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useAppDemo } from "./context/AppContext";

function App() {
  const { login, logout, user } = useAppDemo();

  return (
    <>
      <Outlet />
      <h1>{user.admin ? "connecté" : "déconnecté"}</h1>
      <button onClick={login}>Login</button>
      <Link to="/admin/demo">AdminDemo</Link>
      <button onClick={logout}>Logout</button>
      <Link to="/demo">Demo</Link>
    </>
  );
}

export default App;
