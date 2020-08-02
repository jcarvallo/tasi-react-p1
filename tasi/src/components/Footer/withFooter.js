import React from "react";
import { useStateValue } from "../../context/index";
import { navigate } from "@reach/router";

const withFooter = (Component) => (props) => {
  const ctx = useStateValue();
  const actions = {
    ctx: ctx[0],
    handleCancel: () => navigate("/cancelacion"),
    handleContinue: () => ctx[0].footer.handleContinue(),
  };
  return <Component {...actions} />;
};

export default withFooter;
