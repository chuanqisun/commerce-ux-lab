import { createGlobalStyle } from 'styled-components';

export const fontFamilyFullMDL2SegoeUI = 'Segoe UI';

export const GlobalTextsStyle = createGlobalStyle`
:root {
  --ff-segoe: ${fontFamilyFullMDL2SegoeUI};
}

.segoe {
  font-family: ${fontFamilyFullMDL2SegoeUI};
}

@font-face {
  font-family: ${fontFamilyFullMDL2SegoeUI};
  src: local(${fontFamilyFullMDL2SegoeUI}),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2') format("woff2"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff') format("woff"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf') format("ttf");
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: ${fontFamilyFullMDL2SegoeUI};
  src: local('Segoe UI Light'),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Light/latest.woff2') format("woff2"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Light/latest.woff') format("woff"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Light/latest.ttf') format("ttf");
  font-weight: 100;
  font-display: swap;
}

@font-face {
  font-family: ${fontFamilyFullMDL2SegoeUI};
  src: local('Segoe UI Semilight'),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Semilight/latest.woff2') format("woff2"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Semilight/latest.woff') format("woff"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Semilight/latest.ttf') format("ttf");
  font-weight: 200;
  font-display: swap;
}

@font-face {
  font-family: ${fontFamilyFullMDL2SegoeUI};
  src: local('Segoe UI Semibold'),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Semibold/latest.woff2') format("woff2"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Semibold/latest.woff') format("woff"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Semibold/latest.ttf') format("ttf");
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: ${fontFamilyFullMDL2SegoeUI};
  src: local('Segoe UI Bold'),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Bold/latest.woff2') format("woff2"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Bold/latest.woff') format("woff"),url('//c.s-microsoft.com/static/fonts/segoe-ui/west-european/Bold/latest.ttf') format("ttf");
  font-weight: 700;
  font-display: swap;
}
`;
