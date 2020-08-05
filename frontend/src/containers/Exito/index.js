import React from "react";
import withExito from "./withExito";

const Exito = ({ ...res }) => {
  return (
    <div className="content">
      <h2 dangerouslySetInnerHTML={{ __html: res.message }}></h2>
      <style jsx="true">
        {`
          .content {
            text-align: center;
            margin-top: 18%;
          }
          h2 {
            line-height: 42px;
          }
        `}
      </style>
    </div>
  );
};

export default withExito(Exito);
