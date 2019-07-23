import { createGlobalStyle } from 'styled-components';
import FullMDL2Woff2 from '../../assets/fonts/FullMDL2.woff2';

export const fontFamilyFullMDL2 = 'Full MDL2 Assets';

export const GlobalIconsStyle = createGlobalStyle`
@font-face {
  font-family: ${fontFamilyFullMDL2};
  src: local(${fontFamilyFullMDL2}),url(${FullMDL2Woff2}) format("woff2");
}

:root {
  --ff-mld2: ${fontFamilyFullMDL2};
}

.mdl {
  font-family: ${fontFamilyFullMDL2};
  font-size: 16px;
}
`;
