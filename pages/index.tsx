import * as React from "react";
import App from "../components/App";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { withNamespaces } from "../server/i18n";
import NextComponent from "../lib/NextComponent";
import AudioInput from "../components/AudioInput";

interface IndexProps {}

const Index: NextComponent<IndexProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <App {...props}>
        <AudioInput />
      </App>
    </ThemeProvider>
  );
};

export default withNamespaces("common")(Index);
