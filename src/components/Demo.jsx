import React from "react";
import { useAppDemo } from "../context/AppContext";
import { useAdmin } from "../context/AdminContext";

const Demo = () => {
  const adminContext = useAdmin();
  const appContext = useAppDemo();

  return <h1>Demo</h1>;
};

export default Demo;
