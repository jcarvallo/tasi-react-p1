import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext({});

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const initialState = {
  user: {},
  header: {
    title: "Cajero Automático TASI",
    hidden: false,
    view: "inicio",
  },
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
        header: {
          ...state.header,
          hidden: action.hidden,
          title: action.title ? action.title : "",
          view: action.view ? action.view : "",
        },
      };
    case "changeFooter":
      return {
        ...state,
        footer: {
          ...state.footer,
          hidden: action.hidden,
          continueButton: action.continueButton ? action.continueButton : false,
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
