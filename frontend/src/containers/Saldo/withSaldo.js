import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useStateValue } from "../../context/index";

const withSaldo = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();
 
  useEffect(() => {
    dispatch({ type: "changeHeader", title: "", hidden: true, view: "saldo" });
    const timer = setTimeout(() => {
      dispatch({ type: "initialState" });
      navigate("/");
    }, 15000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const actions = {
    user: Object.values(ctx.user).length > 0 ? ctx.user : {},
    confirmacion: (action) => {
      switch (action) {
        case 1:
          navigate("/operaciones");
          break;
        case 0:
          navigate("/cancelacion");
          break;
        default:
          break;
      }
    },
  };

  return <Component {...actions} />;
};

export default withSaldo;
