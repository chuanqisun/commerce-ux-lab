# Resources
- Design
  - [Heros on landing page](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=382%3A1)
  - [Variations](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=1113%3A61599)
  - [Hero module internal mechanism](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=598%3A32611)
  - [Hero alternative designs (retro fit to mwf alignment options)](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=1912%3A2208)
- Prototypes
  - [Bootstrap carousel restyle](https://codepen.io/chuanqisun/pen/pBLqEb)
  - [Carousel a11y reference implementation by w3c](https://www.w3.org/WAI/tutorials/carousels/working-example/)
  - [Carousel with keyboard operable slide indicators by mwf](https://www.microsoft.com/en-us/mwf/1.57.0/modules/hero)
  - [Content positioning logic v1](https://codepen.io/chuanqisun/pen/xewoWo)
  - [Content positioning logic v2 - simplified and mwf compatible](https://codepen.io/chuanqisun/pen/ZZedPY)
  - [Text-shadow to improve contrast](https://codepen.io/chuanqisun/pen/oOBqww)
  - [Responsive typography](https://stackblitz.com/edit/js-yf1dsn?file=style.css)
  - [Aspect ratio ramp](https://stackblitz.com/edit/aspect-ratio-for-fabrikam-hero?file=index.html)
  - [9 position high fidelity prototype](https://stackblitz.com/edit/9-pos-hero?file=style.scss)

# Interaction notes
- To map the 3 X 3 position options to the Fabrikam design, follow this logic:
  - In config, all three horizontally left aligned layouts => content vertically stretched horizontally left aligned; slide indicator on bottom right
  - In config, all three horizontally centered layouts => content vertically stretched horizontally centered; slide indicator on bottom left
  - In config, all three horizontally right aligned layouts => content vertically stretched horizontally right aligned; slide indicator on bottom left
- We have two reflow options for Mobile width. One that split text and image, the other overlays text on top of image. The authoring tool should have a boolean flag to choose betweeen the two options.
![image.png](/.attachments/image-b3bc6187-7c2f-407c-9e96-8a9227b251c4.png)
- Use text-shadow to increase the contrast of white text against any background. Do NOT use text shadow on dark text.


# Changelog
## 2019-06-12
- Add 9 position high fidelity prototype so Fabrikam hero can be used in starter kit.

## 2019-04-18
- Add bootstrap carousel restyle
## 2019-04-10
- Add retro fitted design that's compatible with mwf alignment options
## 2019-04-09
- Add prototype for text shadow used in the header
## 2019-04-03
- Adding mobile design
- Initial commit
