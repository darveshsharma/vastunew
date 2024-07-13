"use client";
const { createContext } = require("react");

const productcon = createContext();

import React, { useState } from "react";

const ProductContext = ({ children }) => {
  const [state, setstate] = useState([]);
  return <productcon.Provider value={state}>{children}</productcon.Provider>;
};

export default ProductContext;
