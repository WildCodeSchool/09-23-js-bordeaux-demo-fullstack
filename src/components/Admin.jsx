import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h1>Test</h1>
      <Outlet />
    </>
  );
};

export default Admin;
