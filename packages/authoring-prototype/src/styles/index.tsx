import * as React from 'react';
import { GlobalResetsStyle } from './resets/resets';
import { GlobalColorsStyle } from './colors/colors';
import { GlobalFocusStyle } from './focus/focus';
import { GlobalIconsStyle } from './icons/icons';
import { GlobalTextsStyle } from './texts/texts';

export const GlobalStyle = () => (
  <>
    <GlobalResetsStyle />
    <GlobalColorsStyle />
    <GlobalFocusStyle />
    <GlobalIconsStyle />
    <GlobalTextsStyle />
  </>
);

export * from './colors/colors';
export * from './icons/icons';
export * from './texts/texts';
