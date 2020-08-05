import React from "react";
import { Router } from "@reach/router";
import { Layout, Header, Footer } from "./components/index";
import { StateProvider, initialState, reducer } from "./context/index";
import {
  Inicio,
  Operaciones,
  OperacionCancelada,
  Exito,
  Saldo,
  Extraccion,
  Deposito,
  OtroMonto,
} from "./containers/index";

function App() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Layout>
          <Header />
          <Router>
            <Inicio path="/" />
            <Operaciones path="/operaciones" />
            <OperacionCancelada path="/cancelacion" />
            <Exito path="/exito/:type" />
            <Saldo path="/saldo" />
            <Extraccion path="/extraccion" />
            <Deposito path="/deposito" />
            <OtroMonto path="/otro-monto" />
          </Router>
          <Footer />
        </Layout>
      </StateProvider>
    </>
  );
}

export default App;
