import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useStateValue } from "../../context/index";

const withOperacionCancelada = (Component) => (props) => {
   const [ctx, dispatch] = useStateValue();
   console.log(ctx);
  useEffect(() => {
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
    const timer = setTimeout(() => {
      dispatch({ type: "initialState" });
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return <Component />;
};

export default withOperacionCancelada;
