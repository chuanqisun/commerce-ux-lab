# Resources
- [Figma spec](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=587%3A30281)
- Prototypes
  - [Logo image and toolbox layout](https://codepen.io/chuanqisun/pen/EMJqQj)
  - [Multi-level content hierarchy](https://codepen.io/chuanqisun/pen/YMNagv)
  - [Flexible middle layout](https://stackblitz.com/edit/flexible-middle-layout?file=style.css)
- [Get icons](https://fabricicons.azurewebsites.net/)
  - Search
  - Heart
  - Shop
- Get images
  - Fabrikam Logo [export from Figma](https://help.figma.com/article/204-getting-started-with-exports)

# Content structure
- Desktop Root
  - Logo image
  - Toolbox
  - Nav menu
- Mobile root
  - Hamburger Menu
  - Logo
  - Cart

# Interaction Notes
- Switch from desktop header to medium header when viewport is narrower than 992px (Bootstrap `lg` breakpoint)
- In the 768 – 992px range, reduce the side padding to 20px and button gap to 0px.
- Switch to mobile header when viewport is narrower than 768px
- Logo image is a link to the home page
- Logo image has variable width, max width at 220px, and a fixed height at 48px. If there is addition white space on the sides, align the image to the left. Never crop.
- "Search" is a button on rest state. It becomes an `input[type="search"]` and on click and automatically receives focus. Autocomplete is preferred. When enter key is pressed, open the search result page. Alternatively, use can click the "magnifier" button to go to search page.
- "Sign in" is a link to the sign in page.
- "Wishlist" is a link to the wishlist page. The "add to wishlist" behavior is TBD.
- "Shopping bag" is link to the shopping bag page. The "add to shopping bag" behavior is TBD.
- Nav menu (desktop only) has 2 levels of hierarchy
  - Level 2 items show up in a dropdown when level 1 items are hovered or focused or clicked.
  - Level 1 items are not links.
  - Level 2 items are links to open the corresponding gallery pages.
- To make the nav touch device ready and expose level 1 items as links, we propose differential treatments based on level 1 item types. Refer to [prototype](https://codepen.io/chuanqisun/pen/YMNagv).
  - If the level 1 item has a dropdown, show the dropdown on tap/click, and the 1st child item should always be “All {{name of category}}”, which is the link for the level 1 item.
  - If the category has no dropdown, navigate to the target category on tap/click, e.g. the “About page”.
- The dropdown of the nav menu can shrink to fit text but should have a min-width at 200px.
- The Hamburger Menu (mobile only) triggers a full screen modal dialog.
- In mobile menu, if an item has children, clicking it will drill in to show its children. A "View all" link is programmatically added as the 1st item to view the entire category.


# Changelog
## 2019-04-16
- Added medium viewport design
## 2019-04-09
- Updated level 1/2 item navigation pattern.
## 2019-03-26
- Added "reset" and "search" buttons to the search box, updated the figma accordingly
- Added Logo image and toolbox layout codepen link
## 2019-03-25
- Initial commit
