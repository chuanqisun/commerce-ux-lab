import { createGlobalStyle } from 'styled-components';
import 'focus-visible/dist/focus-visible.js';

export const GlobalFocusStyle = createGlobalStyle`
.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}
`;
