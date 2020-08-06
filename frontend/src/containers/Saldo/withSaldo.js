import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useStateValue } from "../../context/index";
import { backHome } from "../../utils";

const withSaldo = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();

  useEffect(() => {
    if (Object.values(ctx.user).length > 0) {
      dispatch({
        type: "changeHeader",
        title: "",
        hidden: true,
        view: "saldo",
      });
       dispatch({
         type: "changeFooter",
         hidden: true,
         continueButton: false,
       });
      const timer = setTimeout(() => backHome(dispatch), 15000);
      return () => clearTimeout(timer);
    } else backHome(dispatch);
  }, [dispatch, ctx.user]);

  const actions = {
    user: ctx.user,
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
