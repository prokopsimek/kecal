import * as React from "react";
import { withLayout } from "../lib/layout";

export interface AppProps {}

const App: React.SFC<AppProps> = props => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default withLayout(App);
