# Resources
- Designs
  - [BuyBox in PDP page](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=419%3A0)
  - [BuyBox module details](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=1166%3A118)
  - [Buy online, pickup in-store](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=1022%3A42575)
  
- Prototypes
  - Quantity stepper and dropdown selects in [Components & Styles](/Home/Fabrikam/Components-&-Styles-&-Patterns)

# Content structure
- Buybox
  - Media gallery
    - Thumbnail images
    - Spotlight image
  - Product details
    - Title
    - Price
    - Description
    - More details link
    - SKU number
    - Badges
    - Dimension pickers
    - CTAs
      - Add to bag
      - Add to wishlist
    - Buy online pickup in store

# Interaction notes
- "More details" is a link to the enrichment section. Consider using an anchor. e.g. `<a href='#enrichment'>`.
- The stars in the buybox is a link to the review section. Consider using an anchors. `<a href='#reviews>`
- BOPIS store dialog can be used for picking store for the 1st time or changing store after a store is already picked. In the change store scenario, the currently selected store is already shown as the first item in the list, even before the search.
- The entire BOPIS dialog content is scroll-able, except for the dialog title and the close button.
- Note that at the bottom of the BOPIS dialog, there is a footnote: "Product availability is subject to change without notice."
- The desktop BuyBox has left and right part. Left being Media gallery. Right being Product details. Product details is fixed at 456px wide. Media gallery takes up the rest of the screen width.
- Within Media gallery, Thumbnail images are fixed at 120px wide. The spotlight image takes up the rest of the width.
- Switch from desktop to mobile layout when screen gets narrower than Boostrap md breakpoint (992px)

# Changelog
## 2019-04-12
- Added content structure
- Added responsive behavior description in interaction notes.