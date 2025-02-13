import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context";
import { operationService } from "../../services";
import { backHome, handleError } from "../../utils";

const withExito = (Component) => (props) => {
  let { type } = props;
  const [ctx, dispatch] = useStateValue();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (Object.values(ctx.user).length > 0) {
     dispatch({ type: "changeHeader", hidden: true });
     dispatch({ type: "changeFooter", hidden: true });
      let operation = async () => {
        try {
          let { saldo } = ctx.user;
          let data = { saldo, monto: ctx.montoOperation };
          let transaccion = await operationService.transaccion(type, data);
          setMessage(transaccion.data.message);
        } catch (e) {
          handleError(e);
        }
      };
      operation();
      const timer = setTimeout(() => backHome(dispatch), 7000);
      return () => clearTimeout(timer);
    } else backHome(dispatch);
  }, [dispatch, ctx.user, ctx.montoOperation, type]);

  const actions = {
    message,
  };

  return <Component {...actions} />;
};

export default withExito;
