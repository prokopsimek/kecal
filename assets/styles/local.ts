import { css } from 'styled-components';

export const localStyle = css`
  // Corrects 'block' display not defined in IE 6/7/8/9 and Firefox 3.
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section {
    display: block;
  }

  // Corrects 'inline-block' display not defined in IE 6/7/8/9 and Firefox 3.
  audio,
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: white;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    font-family: "Manrope", serif;
    font-size: 100%;

    &.disable-overflow {
      overflow: hidden;
    }
  }
`;
