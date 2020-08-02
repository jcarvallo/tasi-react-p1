import React from "react";
import withOperaciones from "./withOperaciones";
import { Row, Col, Button } from "reactstrap";

const Operaciones = ({ ...res }) => {
  const { user, handleGoTo } = res;
  return (
    <div className="content">
      <div className="user">
        <h3>{`Bienvenido ${user.nombre ? user.nombre : ""}`}</h3>
        <h5>¿Qué operación deseas realizar?</h5>
      </div>
      <Row>
        <Col xs="6" style={{ textAlign: "right" }}>
          <Button size="lg" onClick={() => handleGoTo("extraccion")}>
            Extracción
          </Button>
        </Col>
        <Col xs="6" style={{ textAlign: "left" }}>
          <Button size="lg" onClick={() => handleGoTo("deposito")}>
            Depósito
          </Button>
        </Col>
        <Col xs="12">
          <Button size="lg" onClick={() => handleGoTo("saldo")}>
            Consulta de saldo
          </Button>
        </Col>
      </Row>
      <style jsx="true">
        {`
          .content {
            text-align: center;
          }
          .user {
            margin: 30px 0 80px 0;
          }
          .btn-secondary {
            width: 300px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default withOperaciones(Operaciones);
