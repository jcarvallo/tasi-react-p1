import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/index";
import { navigate } from "@reach/router";
import { formateado as format } from "../../utils";

const withExtracion = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();
  const [monto, setMonto] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
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
              let formateado = format(value)
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
    //  const timer = setTimeout(() => {
    //    dispatch({ type: "initialState" });
    //    navigate("/");
    //  }, 5000);
    //  return () => clearTimeout(timer);
  }, [dispatch, monto, ctx.user, modal, setModal]);

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
