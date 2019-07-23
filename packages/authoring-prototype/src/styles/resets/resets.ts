import { createGlobalStyle } from 'styled-components';
import { fontFamilyFullMDL2SegoeUI } from '../texts/texts';
import { colors } from '../colors/colors';

export const GlobalResetsStyle = createGlobalStyle`
  html, body, #app {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${fontFamilyFullMDL2SegoeUI};
    color: ${colors.gray160};
  }

  * {
    color: inherit;
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }
`;
