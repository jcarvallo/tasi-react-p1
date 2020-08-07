import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context";
import { navigate } from "@reach/router";
import { formateado as format, backHome } from "../../utils";

const withExtracion = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();
  const [monto, setMonto] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (Object.values(ctx.user).length > 0) {
      const handleContinue = () => {
        if (monto) {
          switch (monto) {
            case "otro":
              navigate("/otro-monto");
              break;
            default:
              let { value } = ctx.user.saldo;
              if (value > monto) {
                value = value - monto;
                let formateado = format(value);
                let saldo = { value, formateado };
                dispatch({
                  type: "setOperation",
                  saldo,
                  monto: format(monto),
                });
                navigate("/exito/extraccion");
              } else setModal(!modal);
              break;
          }
        }
      };
      dispatch({
        type: "changeHeader",
        title: "Extracción",
        hidden: false,
        view: "extraccion",
      });
      dispatch({
        type: "changeFooter",
        hidden: false,
        continueButton: true,
        handleContinue,
      });
    }else backHome(dispatch);
  }, [dispatch, monto, ctx.user, modal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMonto("");
      setModal(false);
      backHome(dispatch);
    }, 15000);
    return () => clearTimeout(timer);
  }, [dispatch, monto, modal]);

  const actions = {
    actionsModal: { modal, setModal },
    handleMonto: (dato) => {
      dispatch({ type: "disabledContinue" });
      setMonto(dato);
    },
  };
  return <Component {...actions} />;
};

export default withExtracion;
