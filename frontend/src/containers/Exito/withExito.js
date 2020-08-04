import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useStateValue } from "../../context/index";
import UserService from "../../services/user.service";

const servicesUser = new UserService();

const withExito = (Component) => (props) => {

  let { tipo } = props;
  const [ctx, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "changeHeader",
      title: "",
      hidden: false,
      view: "exito",
    });
    dispatch({ type: "changeFooter", hidden: true });

    let updateUser = async () => {
      try {
        let data = ctx.user ? ctx.user : {};
        let update = await servicesUser.updateUser(data);
        console.log(update);
        // let update= await servicesUser.updateUser(ctx.user);
      } catch (error) {
        console.log(error);
      }
    };

    updateUser();

    // const timer = setTimeout(() => navigate("/"), 10000);
    // return () => clearTimeout(timer);
    console.log(localStorage.getItem("users"));
  }, [dispatch, ctx.user]);

  const actions = {
    tipo: tipo === "deposito" ? "depósito" : "extracción",
    monto: tipo === "deposito" ? ctx.montoDeposito : ctx.montoExtraccion,
    cuenta: ctx.user.cuenta,
  };

  return <Component {...actions} />;
};

export default withExito;
