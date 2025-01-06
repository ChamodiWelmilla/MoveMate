import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [bookmarkCount, setBookmarkCount] = useState(0);

  const increment = (value) => {
    setBookmarkCount((prevCount) => Math.max(0, prevCount + value)); 
  };

  return (
    <Context.Provider
      value={{
        bookmarkCount,
        increment,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCustomContext must be used within a Provider");
  }
  return context;
};
