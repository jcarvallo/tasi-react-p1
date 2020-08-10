import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { validateMaxLength, validateForm, handleError } from "../../utils";
import { authenticationService } from "../../services";
import { useStateValue } from "../../context";

const withInicio = (Component) => (props) => {
  let initialState = {
    dni: ["", { minLength: 7, maxLength: 8 }],
    clave: ["", { minLength: 4, maxLength: 4 }],
    inputName: "",
    disabled: true,
  };
  const [state, setstate] = useState(initialState);
  const [ctx, dispatch] = useStateValue();

  useEffect(() => {
    const timer = setTimeout(() => setstate(initialState), 10000);
    return () => clearTimeout(timer);
  }, [setstate, state, initialState]);

  const actions = {
    state,
    ctx,
    actionsKeyboard: {
      disabled: state.disabled,
      handleInput: (inputValue) => {
        if (state.inputName) {
          let newValue = validateMaxLength(
            state[state.inputName.toLowerCase()][1].maxLength,
            inputValue,
            state[state.inputName.toLowerCase()][0]
          );
          let value = state[state.inputName.toLowerCase()];
          value[0] = newValue;
          setstate({
            ...state,
            [state.inputName.toLowerCase()]: value,
            disabled: validateForm({ ...state }),
          });
        }
      },
      handleDelete: () => {
        if (state.inputName) {
          let value = state[state.inputName.toLowerCase()];
          let newValue = value[0].substring(value[0].length - 1, 0);
          value[0] = newValue;
          setstate({
            ...state,
            [state.inputName.toLowerCase()]: value,
            disabled: validateForm({ ...state }),
          });
        }
      },
      handleContinue: async () => {
        try {
          let auth = { password: state.clave[0], username: state.dni[0] };
          let { data } = await authenticationService.authentication(auth);
          dispatch({ type: "setUser", user: data.user });
          navigate("/operaciones");
        } catch (e) {
          handleError(e);
        }
      },
    },
    handleFocus: ({ target }) => {
      setstate({ ...state, inputName: target.name });
    },
  };
  return <Component {...actions} />;
};

export default withInicio;
