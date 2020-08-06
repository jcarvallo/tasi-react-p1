import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { validateMaxLength, validateForm } from "../../utils";
import UserService from "../../services/user.service";
import { useStateValue } from "../../context";

const service = new UserService();

const withInicio = (Component) => (props) => {
  let initialState = {
    dni: ["", { minLength: 7, maxLength: 8 }],
    clave: ["", { minLength: 4, maxLength: 4 }],
    inputName: "",
    disabled: true,
  };
  const [state, setstate] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [ctx, dispatch] = useStateValue();

  useEffect(() => {
    let getUsers = async () => {
      try {
        let users = await service.getUsers();
        setUsers(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [setstate]);

  useEffect(() => {
    const timer = setTimeout(() => setstate(initialState), 7000);
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
      handleContinue: () => {
        let dataUser = users.find(
          (user) => user.dni === state.dni[0] && user.clave === state.clave[0]
        );
        if (dataUser) {
          dispatch({ type: "setUser", user: dataUser });
          navigate("/operaciones");
        } else {
          alert("Datos Incorretos");
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
