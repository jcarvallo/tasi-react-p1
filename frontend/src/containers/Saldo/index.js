import React from "react";
import withSaldo from "./withSaldo";
import { Button, Row, Col } from "reactstrap";

const Saldo = ({ ...res }) => {
  return (
    <div className="content">
      <h2 className="mb-4">Su saldo es</h2>
      <h1 className="mb-4">{`$${
        res.user.saldo ? res.user.saldo.formateado : ""
      }`}</h1>
      <p>¿Desea realizar otra operación?</p>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Button
            style={{ marginRight: "86px", width: "12%" }}
            onClick={() => res.confirmacion(1)}
          >
            SI
          </Button>
          <Button onClick={() => res.confirmacion(0)}>NO</Button>
        </Col>
      </Row>
      <style jsx="true">
        {`
          .content {
            text-align: center;
            margin-top: 15%;
          }
          .btn-secondary {
            background-color: #f60;
            border-color: #f60;
          }
        `}
      </style>
    </div>
  );
};

export default withSaldo(Saldo);
