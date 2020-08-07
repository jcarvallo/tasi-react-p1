import React from "react";
import withFooter from "./withFooter";
import { Row, Col, Button } from "reactstrap";

const Footer = ({ ...res }) =>
  !res.ctx.footer.hidden ? (
    <div className="footer py-3">
      <Row>
        <Col>
          <Button className="btn-footer" onClick={res.handleCancel}>
            Cancelar
          </Button>
        </Col>
        <Col>
          {res.ctx.footer.continueButton && (
            <Button
              className="btn-footer"
              onClick={res.handleContinue}
              disabled={res.ctx.footer.disabledContinue}
            >
              Continuar
            </Button>
          )}
        </Col>
      </Row>
      <style jsx="true">
        {`
          .btn-footer {
            background-color: #f60;
            border-color: #f60;
            width: 180px !important;
          }
          .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            color: white;
            text-align: center;
          }
        `}
      </style>
    </div>
  ) : null;

export default withFooter(Footer);
