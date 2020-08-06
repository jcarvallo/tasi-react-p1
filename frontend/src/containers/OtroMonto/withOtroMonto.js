import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/index";
import { validateMaxLength, formateado as format, backHome } from "../../utils";
import { navigate } from "@reach/router";

const withOtroMonto = (Component) => (props) => {
  const initialState = {
    disabled: true,
    monto: "",
    montoFormateado: "",
  };
  const [state, setState] = useState(initialState);
  const [modal, setModal] = useState(false);
  const [ctx, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "changeHeader",
      title: "Otro monto",
      hidden: false,
      view: "otro-monto",
    });
    dispatch({
      type: "changeFooter",
      hidden: false,
      continueButton: false,
    });
  }, [dispatch]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(initialState);
      setModal(false);
      backHome(dispatch);
    }, 15000);
    return () => clearTimeout(timer);
  }, [dispatch, state, modal, initialState]);

  const actions = {
    state,
    actionsModal: { modal, setModal },
    actionsKeyboard: {
      disabled: state.disabled,
      handleInput: (inputValue) => {
        let newValue = validateMaxLength(5, inputValue, state.monto);
        setState({
          ...state,
          monto: newValue,
          montoFormateado: format(newValue),
          disabled: newValue.length >= 3 ? false : true,
        });
      },
      handleDelete: () => {
        let value = state.monto;
        let newValue = value.substring(value.length - 1, 0);

        setState({
          ...state,
          monto: newValue,
          montoFormateado: format(newValue),
          disabled: newValue.length >= 3 ? false : true,
        });
      },
      handleContinue: () => {
        let { monto, montoFormateado } = state;
        let { value } = ctx.user.saldo;
        if (value > monto) {
          value = value - monto;
          let formateado = format(value);
          let saldo = { value, formateado };
          dispatch({
            type: "setOperation",
            saldo,
            monto: montoFormateado,
          });
          navigate("/exito/extraccion");
        } else setModal(!modal);
      },
    },
  };

  return <Component {...actions} />;
};

export default withOtroMonto;
