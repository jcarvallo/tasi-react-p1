import React from 'react'
import NumericKeyboard from "../../components/NumericKeyboard";
import withInicio from "./withInicio";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";

const Inicio = ({...res}) => {
    return (
      <Row style={{ marginTop: "50px" }}>
        <Col xs="6">
          <h4>Ingrese DNI y Clave</h4>
          <Form style={{ paddingTop: "11%" }}>
            <FormGroup>
              <Input
                type="text"
                name="DNI"
                id="DNI"
                placeholder="DNI"
                defaultValue={res.state.dni[0]}
                onFocus={(e) => res.handleFocus(e)}
                maxLength={8}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="CLAVE"
                id="CLAVE"
                placeholder="CLAVE"
                defaultValue={res.state.clave[0]}
                onFocus={(e) => res.handleFocus(e)}
                maxLength={4}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col xs="6">
          <NumericKeyboard {...res.actionsKeyboard} />
        </Col>
      </Row>
    );
}

export default withInicio(Inicio);
