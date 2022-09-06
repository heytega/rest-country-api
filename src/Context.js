import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
