import React, { createContext, useReducer, FC, useContext } from "react";
import Reducer, { INITIAL_STATE, state } from "./redurcer";

export const Context = createContext({});

const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
