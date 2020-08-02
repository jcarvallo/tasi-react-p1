import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/index";
import { validateMaxLength } from "../../utils/validate";

const withOtroMonto = (Component) => (props) => {
  const initialState = {
    disabled: true,
    monto: "",
    montoFormateado: "",
  };
  const [state, setState] = useState(initialState);
  const [ctx, dispatch] = useStateValue();
  console.log(ctx);

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

  const actions = {
    state,
    handleInput: (inputValue) => {
      let newValue = validateMaxLength(5, inputValue, state.monto);

      setState((pre) => ({
        ...pre,
        monto: newValue,
        montoFormateado: newValue.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        disabled: newValue.length >= 3 ? false : true,
      }));
    },
    handleDelete: () => {
  
        let value = state.monto;
        let newValue = value.substring(value.length - 1, 0);
    
        setState((pre) => ({
          ...pre,
          monto: newValue,
          montoFormateado: newValue.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
          disabled: newValue.length >= 3 ? false : true,
        }));
    
    },
    handleContinue: () => {
      console.log(state);
    },
  };

  return <Component {...actions} />;
};

export default withOtroMonto;
