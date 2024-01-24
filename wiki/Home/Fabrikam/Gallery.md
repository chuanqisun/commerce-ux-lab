# Resources
- Designs
  - [Gallery page](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=625%3A31233)
  - [Home page (with non-carousel list of 5 items)](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=382%3A1)
  - [Product details page (with two carousel lists)](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=419%3A0)
  - [Filter pane details](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=1020%3A42383)
  - [Sort and filter mobile behavior](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=1658%3A51256)
- Prototypes
  - [Semantic HTML and tab order](https://codepen.io/chuanqisun/pen/mgpqGY)
  - [Responsive gallery/search results page](https://codepen.io/chuanqisun/pen/JVGEZg)
  - [Responsive grid](https://codepen.io/chuanqisun/pen/MxMmPa)
  - [Responsive 4-product placement](https://codepen.io/chuanqisun/pen/oOgqNb)
  - [Product card](https://codepen.io/chuanqisun/pen/OGLbwv)
  - [Product card with description (not for Fabrikam)](https://codepen.io/chuanqisun/pen/LvWved?editors=1100)
  - [Add to wishlist from card ❤️](https://codepen.io/chuanqisun/pen/xBvJPP)
  - [Pagination reference implementation (css-change only)](https://codepen.io/chuanqisun/pen/zXBEMN)
  - [Products with no image will use a placeholder image](https://react-ghrr3o.stackblitz.io) [source code](https://stackblitz.com/edit/react-ghrr3o)
  - [Product card semantic html](https://codepen.io/chuanqisun/pen/eaNGVq)
  - [Semantic HTML + Fabrikam skinning example](https://codepen.io/chuanqisun/pen/BeNwvP)


# Interaction Notes
- Product card has 4 interactions:
  - Image: `<a>` to product details page.
  - Product name: `<a>` to product details page.
  - Rating stars: `<a>` to reviews section on product details page.
  - Wish button: add to wishlist.
- When the description is displayed on the card, the description is capped at 3 lines.
- The image area of the card has fixed height and variable width. The image will be shrunk to fit within the area, using `object-fit: contain;` logic. It's important to not crop a product by accident.
- The text area of the card has fixed height and variable width. The product name text has a max height for two rows of text. Additional text will be cropped. Show ellipsis in browsers that support [multi-line clamping](http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/)
- The entire card will stretch as wide as necessary to snap to Bootstrap grid lines