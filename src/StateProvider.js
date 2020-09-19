import React, { createContext, useContext, useReducer } from "react";
//prepares data layer
export const StateContext = createContext();
//Wrap our App and provide th data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull information fron the data layer
export const useStateValue = () => useContext(StateContext);
