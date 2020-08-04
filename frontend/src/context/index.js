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
  montoDeposito: 0,
  montoExtraccion: 0,
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
            : state.footer.continueButton,
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
    case "setDeposito":
      return {
        ...state,
        user: { ...state.user, saldo: action.saldo },
        montoDeposito: action.monto,
      };
    case "setExtraccion":
      return {
        ...state,
        montoExtraccion: action.monto,
      };

    default:
      return state;
  }
};
export const useStateValue = () => useContext(StateContext);
