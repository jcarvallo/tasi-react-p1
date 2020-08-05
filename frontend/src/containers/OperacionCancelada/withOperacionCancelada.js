import React, { useEffect } from "react";
import { useStateValue } from "../../context/index";
import { backHome } from "../../utils";

const withOperacionCancelada = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();
  useEffect(() => {
    if (Object.values(ctx.user).length > 0) {
      dispatch({
        type: "changeHeader",
        title: "",
        hidden: true,
        view: "cancelacion",
      });
      dispatch({
        type: "changeFooter",
        hidden: true,
        continueButton: false,
      });
      const timer = setTimeout(() => backHome(dispatch), 5000);
      return () => clearTimeout(timer);
    } else backHome(dispatch);
  }, [dispatch, ctx.user]);

  return <Component />;
};

export default withOperacionCancelada;
