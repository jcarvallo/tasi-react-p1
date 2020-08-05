import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useStateValue } from "../../context/index";
import { backHome } from "../../utils";
const withOperaciones = (Component) => (props) => {
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
        hidden: false,
        continueButton: false,
      });
    } else backHome(dispatch);
  }, [dispatch, ctx.user]);

  const actions = {
    user:ctx.user,
    handleGoTo: (path) => navigate(`/${path}`),
  };
  return <Component {...actions} />;
};

export default withOperaciones;
