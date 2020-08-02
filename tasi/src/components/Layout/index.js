import React from "react";
import { Container } from "reactstrap";

const Layout = (props) => (<Container className="p-4">{props.children}</Container>);

export default Layout;
