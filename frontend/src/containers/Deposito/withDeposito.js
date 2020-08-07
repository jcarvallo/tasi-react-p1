import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context";
import { validateMaxLength, backHome, formateado as format } from "../../utils";
import { navigate } from "@reach/router";

const withDeposito = (Component) => (props) => {
  const initialState = {
    disabled: true,
    monto: { total: 0, formateado: "0" },
    cien: { cantidad: "", total: 0, pesos: 100 },
    docientos: { cantidad: "", total: 0, pesos: 200 },
    quinientos: { cantidad: "", total: 0, pesos: 500 },
    mil: { cantidad: "", total: 0, pesos: 1000 },
    inputName: "",
  };
  const [state, setState] = useState(initialState);
  const [ctx, dispatch] = useStateValue();

  useEffect(() => {
    if (Object.values(ctx.user).length > 0) {
      dispatch({
        type: "changeHeader",
        title: "Depósito",
        hidden: false,
        view: "deposito",
      });
      dispatch({
        type: "changeFooter",
        hidden: false,
        continueButton: false,
      });
    } else backHome(dispatch);
  }, [dispatch, ctx.user]);

  useEffect(() => {
    const timer = setTimeout(() => backHome(dispatch), 10000);
    return () => clearTimeout(timer);
  }, [dispatch, state]);

  const totalDeposito = (totalPesos) => {
    let total = 0;
    for (let [key, value] of Object.entries(state)) {
      if (key !== state.inputName) {
        switch (key) {
          case "cien":
            total += value.total;
            break;
          case "docientos":
            total += value.total;
            break;
          case "quinientos":
            total += value.total;
            break;
          case "mil":
            total += value.total;
            break;
          default:
            break;
        }
      }
    }

    total += totalPesos;

    return {
      total,
      formateado: format(total),
    };
  };

  const actions = {
    state,
    handleFocus: ({ target }) => {
      setState({ ...state, inputName: target.name });
    },
    actionsKeyboard: {
      disabled: state.disabled,
      handleInput: (inputValue) => {
        if (state.inputName) {
          let cantidad = validateMaxLength(
            2,
            inputValue,
            state[state.inputName].cantidad
          );

          let nexTotalPesos = parseInt(cantidad) * state[state.inputName].pesos;

          setState({
            ...state,
            [state.inputName]: {
              ...state[state.inputName],
              cantidad: cantidad,
              total: nexTotalPesos,
            },
            monto: totalDeposito(nexTotalPesos),
            disabled: totalDeposito(nexTotalPesos).total > 0 ? false : true,
          });
        }
      },
      handleDelete: () => {
        if (state.inputName) {
          let cantidad = state[state.inputName].cantidad;
          let newCantidad = cantidad.substring(cantidad.length - 1, 0);
          let newTotalPesos =
            parseInt(newCantidad ? newCantidad : 0) *
            state[state.inputName].pesos;

          setState({
            ...state,
            [state.inputName]: {
              ...state[state.inputName],
              cantidad: newCantidad,
              total: newTotalPesos,
            },
            monto: totalDeposito(newTotalPesos),
            disabled: totalDeposito(newTotalPesos).total > 0 ? false : true,
          });
        }
      },
      handleContinue: () => {
        let value = ctx.user.saldo.value + state.monto.total;
        let formateado = format(value);
        const saldo = { value, formateado };
        dispatch({
          type: "setOperation",
          saldo,
          monto: state.monto.formateado,
        });
        navigate("/exito/deposito");
      },
    },
  };
  return <Component {...actions} />;
};

export default withDeposito;
