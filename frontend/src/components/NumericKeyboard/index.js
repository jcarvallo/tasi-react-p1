import React from "react";
import { Card, CardBody, Row } from "reactstrap";
import withNumericKeyboard from "./withNumericKeyboard";

const NumericKeyboard = ({ ...res }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Row xs="3">{res.buttons()}</Row>
        </CardBody>
      </Card>
      <style jsx="true">{`
        .btn-secondary {
          background-color: #f60;
          border-color: #f60;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default withNumericKeyboard(NumericKeyboard);
