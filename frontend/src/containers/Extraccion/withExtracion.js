import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/index";
import { navigate } from "@reach/router";

const withExtracion = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();
  const [monto, setMonto] = useState("");
  console.log(ctx);

  const handleOtroMonto = () => navigate("/otro-monto");

  useEffect(() => {
    const handleContinue = () => {
      if (monto) {
        switch (monto) {
          case "otro":
            handleOtroMonto();
            break;
          default:
            alert(monto);
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
      handleContinue: () => handleContinue(),
    });
    //  const timer = setTimeout(() => {
    //    dispatch({ type: "initialState" });
    //    navigate("/");
    //  }, 5000);
    //  return () => clearTimeout(timer);
  }, [dispatch, monto]);

  const actions = {
    handleMonto: (dato) => {
      dispatch({ type: "disabledContinue" });
      setMonto(dato);
    },
  };
  return <Component {...actions} />;
};

export default withExtracion;
