import React from "react";
import withExtracion from "./withExtracion";
import { AlertModal } from "../../components";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Extraccion = ({ ...res }) => {
 
  return (
    <div className="content">
      <Form>
        <Row>
          <Col xs="6 p-col">
            <Card>
              <CardBody>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="monto"
                      value={500}
                      onClick={({ target }) => res.handleMonto(target.value)}
                    />
                    $500
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="monto"
                      value={2000}
                      onClick={({ target }) => res.handleMonto(target.value)}
                    />
                    $2.000
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="monto"
                      value={3000}
                      onClick={({ target }) => res.handleMonto(target.value)}
                    />
                    $3.000
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6 p-col">
            <Card>
              <CardBody>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="monto"
                      value={5000}
                      onClick={({ target }) => res.handleMonto(target.value)}
                    />
                    $5.000
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="monto"
                      value={6000}
                      onClick={({ target }) => res.handleMonto(target.value)}
                    />
                    $6.000
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="monto"
                      value={"otro"}
                      onClick={({ target }) => res.handleMonto(target.value)}
                    />
                    Otro monto
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
      <AlertModal {...res.actionsModal} />
      <style jsx="true">
        {`
          .content {
            text-align: center;
            margin-top: 60px;
          }
          .p-col {
            padding: 0 60px 0 60px;
          }
          .card-body {
            text-align: left;
          }
          .form-check {
            padding-bottom: 6px;
          }
        `}
      </style>
    </div>
  );
};

export default withExtracion(Extraccion);
