# Proposed modules

## Taxonomy
- Text and media
  - Poster (prev. Hero and Banner)
  - Collage (prev. Feature)
  - Card (prev. ContentPlacementItem)
  - Heading
  - Paragraph
  - RichText
  - Image (new)
  - Video (prev. AmbientVideo and VideoPlayer)
  - Carousel
- Layout and structure
  - Columns (prev. ContentPlacement and ContentRichBlock and BuyBoxContainer)
  - Rows
  - Grid
  - Spacer
  - Horizontal divider
  - Vertical divider
  - Group
- Form and action
  - Button
  - ButtonGroup
  - Email subscribe
- E-commerce
  - Product name
  - Product description
  - Price
  - Rating
  - Badge
  - Shipping info
  - Color picker
  - Size picker
  - Buy button
  - Quantity picker
  - Add to card
  - Add to wish list
  - Reviews
  - Configure and buy
  - Media gallery
  - Product recommendation
  - Product collection
  
  


## Text and media
---
### Poster
- Use for: large sized hero, welcome, story telling, site welcome, splash image, carousel slide
- Parent: Any slotted module. Recommend: Page, Carousel
- Provide content
  - Slot1: An array of any modules. Recommend: Heading/Paragraph/RichText/Button/ButtonGroup/Spacer
- Choose design
  - Image settings
  - Overlay: color, opacity
  - Width: fit-screen/fit-container
  - Slot1 alignment: x=left/center/right, y=top/mid/bottom
  - Slot1 flow=horizontal/vertical
  - Slot1 offset: x=?, y=?
  - Slot1 padding
  - Slot1 background

### Collage
- Use for: mid-large sized product presentation, story telling
- Parent: Any slotted module. Recommend: Page, Carousel
- Provide content
  - Slot1: An array of any modules. Recommend: Heading/Paragraph/RichText/Button/ButtonGroup/Spacer
- Choose design
  - Image settings
  - Layout: media-left/media-right
  - Width distribution: 0% - 100%;
  - Slot1 alignment: x=left/center/right, y=top/mid/bottom
  - Slot1 flow=horizontal/vertical
  - Slot1 offset: x=?, y=?
  - Slot1 background: color
  - Slot1 padding

### Card
- Use for: small-mid sized product presentation, story telling, low-mid density collection
- Parent: Any slotted module. Recommend: Columns, Group
- Provide content
  - Slot1: Image
  - Slot2: An array of any modules. Recommend: Heading/Paragraph/RichText/Button/ButtonGroup/Spacer
- Choose design
  - Background-color settings
  - Layout: text-follow-media/text-overlay-media
  - Style: border, padding, border-radius
  - Slot1-2 Gap
  - Slot2 offset: y
  - Slot2 alignment: x=left/center/right
  - Slot2 alignment: y=top/mid/bottom (only if text-overlay-media)
  - Slot2 flow=horizontal/vertical
  - Slot2 background: color
  - Slot2 padding

### Heading
- Use for: summarizing content, marketing slogan
- Parent: Any slotted module. Recommend: Poster/Collage/Card/Columns/Group
- Provide content
  - Heading string
  - Heading level: 1-6
- Choose design
  - Justify: left/center/right/justified
  - Typography
    - Font size
    - Font family
    - Font weight
    - Line height
    - Letter spacing
    - Text style/decoration
    - Text transform

### Paragraph
- Use for: a single paragraph
- Parent: Any slotted module. Recommend: Poster/Collage/Card/Columns/Group
- Provide content
  - Paragraph string
- Choose design
  - Justify: left/center/right/justified
  - Typography
    - Font size
    - Font family
    - Font weight
    - Line height
    - Letter spacing
    - Text style/decoration
    - Text transform

### RichText
- Use for: as a catch all for texts that are impossible to style with Heading/Paragraph. Use for links, lists, quotes, testimonials
- Parent: Any slotted module. Recommend: Poster/Collage/Card/Columns/Group
- Provide content
  - through rich text editor
- Choose design
  - through rich text editor

### Image
- Use for: a stand alone image, decorative image, as a child module for story telling and product presentation
- Parent: Any slotted module. Recommend: Poster/Collage/Card/Columns/Carousel/Grid
- Provide content
  - Image source
  - Alt text
  - Show caption: boolean
  - Caption text
- Choose design
  - Focal point
  - Filter effects
  - Sizing logic: extrinsic/intrinsic
  - Extrinsic aspect ratio: default/override-ratio
  - Extrinsic resize logic=cover/contain
  - Caption placement x=left/center/right, y=top/bottom
  - Caption text typography (same as paragraph)

### Video
- Use for: welcome, story telling, product demo, product usage tutorial
- Parent: Any slotted module. Recommend: Poster/Collage/Carousel
- Provide content
  - Video source: embed/self-host
  - Self-host video soundtracks, subtitles, social shares
- Choose design
  - Show control: true/false
  - Focal point
  - Filter effects
  - Sizing logic: extrinsic/intrinsic
  - Extrinsic aspect ratio: default/override-ratio
  - Extrinsic resize logic=cover/contain
  - Background color
  - Aspect ratio: default/override-ratio
  - Subtitle design (similar to paragraph typography)
- Config interaction
  - Auto play: true/false
  - Start at: time
  - Loop: boolean

### Carousel
- Use for: sequential presentation of 2-9 items in a limit space
- Provide content
  - Slot1: An array of any modules. Recommend: Poster/Collage/Image/Video
- Choose design
  - hide side-button: boolean
  - hide indicator: boolean
  - side-button style: icon-only/text-only/icon-text
  - side-button background-style: none/circle/square/v-rect/h-rect/as-link
  - side-button offset to edge
  - side-button size
  - side-button color
  - indicator style: round, h-rect, v-rect
  - indicator slide-active color: foreground, background
  - indicator slide-inactive color: foreground, background
  - indicator hover, focus state color
- Config interaction
  - Interval: 2 - 9 sec
  - Autoplay: true/false
  - Pause on hover: true/false
  - Pause on click: true/false

### MediaGallery
- Use for: presenting multiple media items simultaneously but with a focus on one item at a time 
- Provide content
  - Slot1: Image/Video
- Choose design
  - Thumbnail position
  - Thumbnail sizing
  - Thumbnail style
  - Spotlight style
  - Thumbnail-spotlight gap size
  - Mobile reflow: no-change/thumbnail-on-top/thumbnail-at-bottom/no-thumbnail
  - Spotlight carousel settings (nearly same as carousel)

## Layout and structure
---
### Columns
- Use for: parallel presentation of a 2-6 items
- Provide content
  - Slot1: an array of any module
- Choose design
  - Column count: 2-9
  - Break point to column count map: key-value pairs
  - Column gap size
  - Column width distribution: array of weights

### Rows
- Use for: stacking of multiple items
- Provide content
  - Slot1: an array of any module
- Choose design
  - row count: 2-99
  - Row gap size

### Grid
- Use for mid-high density presentation of lists of homogeneous items
- Provide content
  - Slot1: An array of any module. Recommend: Card/Image/RichText/Group
- Choose design (overkill)
  - Grid gap
  - Column sizing strategy: by-break-point/by-min-width
    - Breakpoint sizing setting: screen width to column count map
      - Column distribution weight list
    - min-width sizing settings: min-width=x
  - Row sizing: Extrinsic/Intrinsic
  - Row extrinsic sizing: fixed-height=?/fixed-aspect-radio=?
  - Row intrinsic sizing (use tallest item in row)

### Spacer
- Use for: control white spacing, adjust horizontal and vertical rhythm, content separation
- Choose design:
  - size
  - direction: flow-direction/override-to-horizontal/override-to-vertical

### Horizontal Divider
- Use for: content separation
- Choose design
  - solid/dashed/double/complex-pattern
  - line weight: 0-99px
  - line width: fit-screen/fit-container
  - line width offset: left=? right=?
  - color
  - additional margin

### Vertical Divider
- Use for content separation
- Choose design
  - bar/interpunct
  - color
  - additional margin



### Mosaic
- Use for mid-high density presentation of lists of heterogeneous items
- Provide content
  - Slot1: An array of any module. Recommend: Image/RichText/Group
- Choose design
  - Grid gap
  - screen width to column count map
  - Slot column span repeating pattern: e.g. 1,2,1,1,4,2,1,3,2,2
  - Slot row span repeating pattern: e.g. 2,1,1,1,2,1,1,2,1

### Group
- Use for grouping, flow direction adjusting, and padding
- Provide content
  - Slot1: An array of any module
- Choose design
  - Padding
  - Flow direction: column, row
  - Can wrap: boolean


## Action
---
### ButtonGroup
- Use for: multiple related actions, primary + secondary actions, primary + ambient action
- Provide content
  - Slot1: An array of Buttons
- Choose design:
  - Stack on mobile: true/false
  - Button gap
  - Reverse order on reflow

### Button
- Use for: call to action, primary/secondary action, add to bag, add to wish list, checkout, placeholder, navigation
- Provide content
  - Button label
  - Aria label
  - Tooltip label
  - Action type=link/event
  - Link url
  - Event type
  - Event parameter
- Choose design:
  - Style: boxed/circle/ghost/link
  - sizing logic: stretch to container/intrinsic sizing
  - width: min=?/max=?/auto
  - height: single-line/wrap
  - padding
  - Reverse order on reflow
  - Styles (background, border, text, shadow, outline) on all states (hover, focus, active)
    - Preset options: primary/secondary

### FormField
- Use for: collecting user input
- Provide content
  - label
  - hint
  - Event type
  - Event parameter
- Choose design
  - For each state (rest, hover, focus, disabled, error)
    - Label style
    - Hint text style
    - Error message style
    - Input box style
    - Input value style  
- Config interaction
  - data type
  - validation logic

### FormSubmit
- Use for: Collect data in a form, trigger validation, and submit to backend. Commonly used for Add to card, Add to wishlist, Subscribe to newsletter
- Provide content
  - label
- Choose design: same as Button, with additional waiting state
- Config interaction: ?

### ProductConfigurationForm
- Use for: Collect buying perference from user
- Provide content
  - Slot1: an array of modules, Recommend: FormField/Spacer/Group/Rows
  - Slot2: an array of modules, Recommend: FormSubmit/Button/ButtonGroup/Rows/Group/Spacer