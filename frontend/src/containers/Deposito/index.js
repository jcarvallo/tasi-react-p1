import React from "react";
import withDeposito from "./withDeposito";
import { NumericKeyboard } from "../../components/index";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

const Deposito = ({ ...res }) => {
  const { state, handleFocus } = res;
  const { cien, docientos, quinientos, mil } = state;
  return (
    <div>
      <Row style={{ marginTop: "50px" }}>
        <Col xs="6" style={{ paddingLeft: "130px" }}>
          <label style={{ marginLeft: "22px" }}>PESOS</label>
          <label style={{ marginLeft: "36px" }}>CANTIDAD</label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>$100</InputGroupText>
            </InputGroupAddon>
            <Input
              name="cien"
              placeholder="0"
              defaultValue={cien.cantidad}
              onFocus={handleFocus}
              maxLength={2}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>$200</InputGroupText>
            </InputGroupAddon>
            <Input
              name="docientos"
              placeholder="0"
              defaultValue={docientos.cantidad}
              onFocus={handleFocus}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>$500 </InputGroupText>
            </InputGroupAddon>
            <Input
              name="quinientos"
              placeholder="0"
              defaultValue={quinientos.cantidad}
              onFocus={handleFocus}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>$1000</InputGroupText>
            </InputGroupAddon>
            <Input
              name="mil"
              placeholder="0"
              defaultValue={mil.cantidad}
              onFocus={handleFocus}
            />
          </InputGroup>
          <br />
        </Col>
        <Col xs="6" className="totalDeposito">
          <label>MONTO A DEPOSITAR</label>
          <h4>{`$${state.monto.formateado}`}</h4>
          <NumericKeyboard {...res} />
        </Col>
      </Row>
      <style jsx="true">
        {`
          .input-group {
            width: 150px;
          }
          span {
            width: 70px;
          }
          label {
            font-size: 12px;
          }
          .totalDeposito {
            text-align: center;
          }
          h4 {
            margin: 5px 0 21px 0;
          }
        `}
      </style>
    </div>
  );
};

export default withDeposito(Deposito);
