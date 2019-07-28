import { createGlobalStyle } from 'styled-components';
import { localStyle } from './local';
import { fontFaces } from './fonts';

export const GlobalStyle = createGlobalStyle`
  * {
    ${fontFaces}
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${localStyle}
`;
