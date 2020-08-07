import React, { useEffect } from "react";
import { backHome } from "../../utils";
import { useStateValue } from "../../context";

const withError = (Component) => (props) => {
  const [ctx, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({ type: "changeHeader", hidden: true });
    dispatch({ type: "changeFooter", hidden: true });
    const timer = setTimeout(() => backHome(dispatch), 7000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  const actions = {
    ctx,
    error: props.location.state.error,
  };
  return <Component {...actions} />;
};

export default withError;
