import React from "react";
import { useAdmin } from "../context/AdminContext";
import { useAppDemo } from "../context/AppContext";

const AdminDemo = () => {
  const adminContext = useAdmin();
  const appContext = useAppDemo();

  return <h1>DemoAdmin</h1>;
};

export default AdminDemo;
