import React from "react";
import { useStateValue } from "../../context/index";

const withHeader = (Component) => (props) => {
  const ctx = useStateValue();
  const actions = {
    ctx:ctx[0],
  };

  return <Component {...actions} />;
};

export default withHeader;
