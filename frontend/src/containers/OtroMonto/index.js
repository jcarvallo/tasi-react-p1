import React from "react";
import withOtroMonto from "./withOtroMonto";
import { NumericKeyboard, AlertModal } from "../../components";
import { Row, Col } from "reactstrap";

const OtroMonto = ({ ...res }) => {
  const { montoFormateado } = res.state;
  return (
    <div>
      <Row style={{ marginTop: "50px" }}>
        <Col xs="6">
          <h2>{`$${montoFormateado !== "" ? montoFormateado : "0"}`}</h2>
        </Col>
        <Col xs="6">
          <NumericKeyboard {...res.actionsKeyboard} />
        </Col>
      </Row>
      <AlertModal {...res.actionsModal} />
      <style jsx="true">
        {`
          h2 {
            text-align: center;
            margin-top: 80px;
          }
        `}
      </style>
    </div>
  );
};

export default withOtroMonto(OtroMonto);
