import { css } from 'styled-components';

export const fontSizes = {
  fsXXSmall: '12px',
  fsSmall: '14px',
  fsMedium: '16px',
  fsLarge: '18px',
  fsMobileLarge: '20px',
  fsXLarge: '24px',
  fsMobileXLarge: '28px',
  fsXXLarge: '32px',
  fsMobileSuper: '36px',
  fsSuper: '40px',
  fsMega: '54px',
};

export const fontFaces = css`
  @font-face {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: normal;
    src: url("static/fonts/RobotoMono-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    src: url("static/fonts/RobotoMono-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Manrope";
    src: url("static/fonts/manrope-regular.eot");
    src: url("static/fonts/manrope-regular.ttf") format("truetype"),
      url("static/fonts/manrope-regular.woff") format("woff"),
      url("static/fonts/manrope-regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Manrope";
    src: url("static/fonts/manrope-medium.eot");
    src: url("static/fonts/manrope-medium.ttf") format("truetype"),
      url("static/fonts/manrope-medium.woff") format("woff"),
      url("static/fonts/manrope-medium.woff2") format("woff2");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "Manrope";
    src: url("static/fonts/manrope-semibold.eot");
    src: url("static/fonts/manrope-semibold.ttf") format("truetype"),
      url("static/fonts/manrope-semibold.woff") format("woff"),
      url("static/fonts/manrope-semibold.woff2") format("woff2");
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: "Manrope";
    src: url("static/fonts/manrope-bold.eot");
    src: url("static/fonts/manrope-bold.ttf") format("truetype"),
      url("static/fonts/manrope-bold.woff") format("woff"),
      url("static/fonts/manrope-bold.woff2") format("woff2");
    font-style: normal;
    font-weight: bold;
  }
`;
