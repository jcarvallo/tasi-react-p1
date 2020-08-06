import React from "react";
import { navigate } from "@reach/router";

const withModal = (Component) => (props) => {
  const { modal, setModal } = props;
  const actions = {
    modal,
    closeModal: () => setModal(!modal),
    redirect: (path) => {
      setModal(!modal);
      navigate(`/${path}`);
    },
  };
  return <Component {...actions} />;
};

export default withModal;
