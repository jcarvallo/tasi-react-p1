import React from 'react'
import withOperacionCancelada from "./withOperacionCancelada";

const OperacionCancelada = () => {
  
    return (
      <div className="content">
        <h1>La operación ha sido cancelada.</h1>
        <style jsx="true">
          {`
            .content {
              text-align: center;
              margin-top: 20%;
            }
          `}
        </style>
      </div>
    );
}

export default withOperacionCancelada(OperacionCancelada);
