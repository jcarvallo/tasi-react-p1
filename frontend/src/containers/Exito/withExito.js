import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/index";
import UserService from "../../services/user.service";
import {backHome} from '../../utils'

const servicesUser = new UserService();

const withExito = (Component) => (props) => {
  let { type } = props;
  const [ctx, dispatch] = useStateValue();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (Object.values(ctx.user).length > 0) {
      dispatch({
        type: "changeHeader",
        title: "",
        hidden: false,
        view: "exito",
      });
      dispatch({ type: "changeFooter", hidden: true });

      let updateUser = async () => {
        let { _id, saldo } = ctx.user;
        try {
          let transaccion = await servicesUser.transaccion(_id, type, saldo);
          if (transaccion) {
            setMessage(transaccion.data.message);
          } else {
            throw new Error("Error en la operacion");
          }
        } catch (error) {
          console.log(error);
        }
      };

      updateUser();

      const timer = setTimeout(() => backHome(dispatch), 10000);

      return () => clearTimeout(timer);
    } else {
      backHome(dispatch)
    }
  }, [dispatch, ctx.user, type]);

  const actions = {
    message,
  };

  return <Component {...actions} />;
};

export default withExito;
