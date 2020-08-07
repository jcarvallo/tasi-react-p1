import React from 'react'
import withError from "./withError";

const Error = ({...res}) => {
    return (
      <div className="content">
        <h1 dangerouslySetInnerHTML={{ __html: res.error }}></h1>
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

export default withError(Error);
