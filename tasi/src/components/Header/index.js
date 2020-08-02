import React from "react";
import withHeader from "./withHeader";

const Header = ({ ...res }) => {
  let { titleHeader, view, hidden } = res.ctx;
  return (
    <div className="header">
      {!hidden && <h3>{titleHeader}</h3>}
      <style jsx="true">
        {`
          .header {
            text-align: ${view === "inicio" ? "left" : "center"};
            margin-top: ${hidden ? "0" : "15px"};
          }
        `}
      </style>
    </div>
  );
};

export default withHeader(Header);
