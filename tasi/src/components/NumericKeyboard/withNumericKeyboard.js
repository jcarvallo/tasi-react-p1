import React from "react";
import { Button, Col } from "reactstrap";

const withNumericKeyboard = (Component) => (props) => {
  const actions = {
    buttons: () => {
      let button = [];
      for (let index = 1; index < 13; index++) {
        switch (index) {
          case 10: //button borrar
            button.push(
              <Col key={index}>
                <Button
                  size="lg"
                  block
                  className="mt-4"
                  onClick={() => props.handleDelete()}
                >
                  Borrar
                </Button>
              </Col>
            );
            break;
          case 11: //button 0
            button.push(
              <Col key={index}>
                <Button
                  size="lg"
                  block
                  onClick={() => props.handleInput(0)}
                  className="mt-4"
                >
                  0
                </Button>
              </Col>
            );
            break;
          case 12: //button continuar
            button.push(
              <Col key={index}>
                <Button
                  size="lg"
                  block
                  className="mt-4 mb-4"
                  disabled={props.state.disabled}
                  onClick={() => props.handleContinue()}
                >
                  Continuar
                </Button>
              </Col>
            );
            break;
          default: //buttons 1 to 9
            button.push(
              <Col key={index}>
                <Button
                  size="lg"
                  block
                  onClick={() => props.handleInput(index)}
                  className="mt-4"
                >
                  {index}
                </Button>
              </Col>
            );
            break;
        }
      }
      return button;
    },
  };

  return <Component {...actions} />;
};

export default withNumericKeyboard;
