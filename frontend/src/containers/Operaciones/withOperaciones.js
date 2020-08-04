import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useStateValue } from "../../context/index";
const withOperaciones = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();
  useEffect(() => {
      dispatch({
        type: "changeHeader",
        title: "",
        hidden: true,
        view: "saldo",
      });
      dispatch({
        type: "changeFooter",
        hidden: false, 
        continueButton: false ,
      });

  }, [dispatch]);

  const actions = {
    user: Object.values(ctx.user).length > 0 ? ctx.user : {},
    handleGoTo: (path) => navigate(`/${path}`),
  };
  return <Component {...actions} />;
};

export default withOperaciones;
