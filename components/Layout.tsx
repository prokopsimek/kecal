import React from "react";
import { GlobalStyle } from "../assets/styles/globalStyle";

const Layout: React.SFC<any> = props => (
  <React.Fragment>
    <GlobalStyle />
    {props.children}
  </React.Fragment>
);

export default Layout;
