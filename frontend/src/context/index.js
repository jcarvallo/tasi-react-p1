import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext({});

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const initialState = {
  titleHeader: "Cajero Automático TASI",
  view: "inicio",
  hidden: false,
  user: {},
  footer: {
    hidden: true,
    continueButton: false,
    handleContinue: () => {},
    disabledContinue: true,
  },
  montoOperation: "0",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeHeader":
      return {
        ...state,
        titleHeader: action.title,
        hidden: action.hidden,
        view: "saldo",
      };
    case "changeFooter":
      return {
        ...state,
        footer: {
          ...state.footer,
          hidden: action.hidden,
          continueButton: action.continueButton
            ? action.continueButton
            : false,
          handleContinue: action.handleContinue
            ? action.handleContinue
            : state.footer.handleContinue,
        },
      };
    case "disabledContinue":
      return {
        ...state,
        footer: { ...state.footer, disabledContinue: false },
      };
    case "initialState":
      return initialState;
    case "setUser":
      return {
        ...state,
        user: action.user,
      };
    case "setOperation":
      return {
        ...state,
        user: { ...state.user, saldo: action.saldo },
        montoOperation: action.monto,
      };
    default:
      return state;
  }
};
export const useStateValue = () => useContext(StateContext);
