[[_TOC_]]

# 1 Scenarios to support, ranked by expected ROI for customers

## 1.1 Replace all the instances of all the icons
- e.g. Replace an outline icon set ![image.png](/.attachments/image-be98a2e8-3dd5-4f12-b5e1-9854599593c9.png) with a solid icon set ![image.png](/.attachments/image-bb5e48cd-8ccb-472f-937c-85c4df340fac.png).
- e.g. Replace a serious icon set with a cheerful icon set.
- Font awesome icon free will fail almost all customers' design needs.
- Font awesome icon premium and Microsoft MDL iconset will still fail many customers' design needs
- A must-have for large business with their own design requirements.
- A complete/global/exhaustive replacement of all the icons is critical to the visual consistency of storefront.


## 1.2 Replace all instances of a specific usage of an icon in the app
- e.g. Replace all the ![image.png](/.attachments/image-9132fdcf-5fe6-4671-a50a-b58dbf5c0f0c.png) in the app with ![image.png](/.attachments/image-fedec669-53b3-4072-bfc1-d5f3775d4a90.png).
- Necessary for meeting special branding requirement.
- A complete/global/exhaustive replacement of all instances is critical to visual consistency.
- One icon can have multiple meanings. We must make sure we only replace ones that share the same meaning.

## 1.3 Use a new icon when building a new module
- e.g. Create a new icon ![image.png](/.attachments/image-ececb6f7-4331-49b8-b8a7-cc604d881220.png) and use it in a VR product view module.
- A developer experience. Touching code is acceptable.
- New icon creation should be infrequent.
- New icon should fit in with all existing icons.

## 1.4 Reuse an existing icon when building a new module
- e.g. Reuse the ![image.png](/.attachments/image-199f0495-3922-4654-be0f-c714228a465e.png) when building a custom google map store locator button.
- A developer experience. Touching code is acceptable.
- The reused icon should still be globally replaceable in scenarios 1.1 and 1.2.


## 1.5 Add an existing icon to an existing module that doesn't have an icon yet
- e.g. Add ![image.png](/.attachments/image-9132fdcf-5fe6-4671-a50a-b58dbf5c0f0c.png) to ![image.png](/.attachments/image-a50749d4-cdcf-4697-994c-598347ca56dc.png) and get ![image.png](/.attachments/image-dae93824-bb1d-42e1-bcc5-c052f6ed2b22.png)
- When the module reserves a slot for icon, user can turn the slot on/off and pick an icon from the current icon set for the slot.
- When the module doesn't reserve a slot for icon, this becomes scenario 1.4.
- As the module ecosystem grows, individual modules should **avoid** reserving slots, and instead become specialized/focused static components, which eliminates this scenario completely. User can simply choose between ones with an font icon, ones with image icon, and ones without icon, which is easier and faster than configuring on generic module. It also helps to reduce complexity in code.

## 1.6 Create a new icon and add to an existing module that doesn't have an icon yet
- e.g. Create ![image.png](/.attachments/image-9d0afb06-d56c-47b2-b71a-89f6ce532061.png) and add it to ![image.png](/.attachments/image-a50749d4-cdcf-4697-994c-598347ca56dc.png) and get ![image.png](/.attachments/image-a71154bd-d4b7-42d7-9216-3478ca8911f1.png)
- Considered the same as scenario 1.3 followed by scenario 1.5.

## 1.7 Replace an instance of an icon in a specific module
- e.g. Replace the ![image.png](/.attachments/image-a553f337-39ad-4612-95cc-064708ae1db6.png) in the refiner menu with ![image.png](/.attachments/image-b02cf360-8ad7-474a-bf46-f5067b018e39.png)
- This is **very dangerous** behavior we must to guard the customers against. In the example above, the customer may not be aware that the ![image.png](/.attachments/image-a553f337-39ad-4612-95cc-064708ae1db6.png) are also used in the accordions in the mobile site footer. By replacing them only in the refiner menu, the site will have two different icons for the same behavior, causing inconsistency and increasing maintenance cost.
- If customer insists on this scenario, we should treat it as a design system "ejection", and expect partner developers to implement it in code.

# 2 Design proposal
## 2.1 Introduce a small set of MDL icons to the starter kit.
- The set will be focused on online store related concepts.
- The set will carry some "Microsofty" smell but we believe is better than the "Bootstrapy" smell for our customers.
- The set will also be much smaller than bootstrap (est. 90% smaller) and therefore much faster to download. This is critical to mobile users with slow network.
## 2.2 Separate interfaces for icon declaration, icon mapping, and icon usage
- **Icon declaration**
  - Include **all** the unicode in the icon set
  - Describe what icon looks like in the variable names
```css
/* declare-icon.css */

@font-face {
  font-family: "Dynamics Commerce MDL";
  src: url("/url-to/d365-commerce-mdl.woff2") format("woff2"),
       url("/url-to/d365-commerce-mdl.woff") format("woff");
}
/* css variable for demo purpose, we can use scss variables in implementation */
:root {
  --mdl-cross: "\f000";
  --mdl-cart: "\f001";
  --mdl-bag: "\f002";
  --mdl-cart: "\f003"; /* not used, but we include it in expectation of customer wanting to swap bag with cart */
  --mdl-chevron-down: "\f0A0";
  --mdl-chevron-up: "\f0A1";
  --mdl-plus: "\f405";
  --mdl-minus: "\f406";
}
```
- **Icon mapping**
  - Include **only** the icons used in the current store
  - Class names describe the intended usage, not what the icon looks like
```css
/* map-icon.css */

/* css variable for demo purpose, we can use scss variables in implementation */
.icon {
  font-family: "Dynamics Commerce MDL";
}
.icon--close::before {
  content: var(--mdl-cross)
}
.icon--shopping-bag::before {
  content: var(--mdl-bag);
}
.icon--expand::before {
  content: var(--mdl-plus);
}
.icon--collapse::before {
  content: var(--mdl-minus);
}
.icon--new::before {
  content: var(--mdl-plus); /* same icon as expand but for different purpose */
}
```

- **Icon usage**
```html
<!-- some-component.html -->
<button><span class="icon icon--shopping-bag"></span>Add to bag</button>
```

```jsx
/* SomeComponent.jsx */
<SomeEncapsulatedButtonComponent iconClassNames="icon icon--shopping-bag" />
```

# 3 Scenario demos
## 3.1 Replace the out-of-the-box icon set with a custom icon set
3.1.1 Update `declare-icon.css` to declare new font-face and unicode.
```diff
@font-face {
-  font-family: "Dynamics Commerce MDL";
-  src: url("/url-to/d365-commerce-mdl.woff2") format("woff2"),
-       url("/url-to/d365-commerce-mdl.woff") format("woff");
+  font-family: "My Custom Font";
+  src: url("/url-to/my-custom-font.woff2") format("woff2"),
+       url("/url-to/my-custom-font.woff") format("woff");
}
:root {
-  --mdl-cross: "\f000";
-  --mdl-cart: "\f001";
-  --mdl-bag: "\f002";
-  --mdl-cart: "\f003"; /* not used, but we include it in expectation of customer wanting to swap bag with cart */
-  --mdl-chevron-down: "\f0A0";
-  --mdl-chevron-up: "\f0A1";
-  --mdl-plus: "\f405";
-  --mdl-minus: "\f406";
+  --my-font-cross: "\f000";
+  --my-font-basket: "\f001";
+  --my-font-triangle-left: "\f0A0";
+  --my-font-triangle-right: "\f0A1";
+  --my-font-triangle-down: "\f405";
+  --my-font-triangle-up: "\f406";
+  --my-font-add: "\f407";
}
```
3.1.2 Update **all** the mappings in `map-icon.css`
```diff
.icon {
-  font-family: "Dynamics Commerce MDL";
+  font-family: "My Custom Font";
}
.icon--close::before {
-  content: var(--mdl-cross)
+  content: var(--my-font-cross)
}
.icon--shopping-bag::before {
-  content: var(--mdl-bag);
+  content: var(--my-font-basket);
}
.icon--expand::before {
-  content: var(--mdl-plus);
+  content: var(--my-font-triangle-down);
}
.icon--collapse::before {
-  content: var(--mdl-minus);
+  content: var(--my-font-triangle-up);
}
.icon--new::before {
-  content: var(--mdl-plus);
+  content: var(--my-font-add);
}
```

## 3.2 Replace all instances of the shopping bag icon with a cart icon
```diff
.icon {
  font-family: "Dynamics Commerce MDL";
}
.icon--close::before {
  content: var(--mdl-cross)
}
.icon--shopping-bag::before {
-  content: var(--mdl-bag);
+  content: var(--mdl-cart);
}
.icon--expand::before {
  content: var(--mdl-plus);
}
.icon--collapse::before {
  content: var(--mdl-minus);
}
```

## 3.3 Add a new VR headset icon to a new "VR Product View" module
### Method 1, use external SVG
```html
<div><img src="/url/to/vr-headset.svg"></div>
```
###Method 2, use inline SVG
```html
<div>
  <svg>
    <!-- the svg code for the icon -->
  </svg>
</div>
```
### Method 3, extend the custom icon font (to use custom font, follow 3.1 first)
In `declare-font.css`:
```diff
@font-face {
  font-family: "My Custom Font";
  src: url("/url-to/my-custom-font.woff2") format("woff2"),
       url("/url-to/my-custom-font.woff") format("woff");
}
:root {
  --my-font-cross: "\f000";
  --my-font-basket: "\f001";
  --my-font-triangle-left: "\f0A0";
  --my-font-triangle-right: "\f0A1";
  --my-font-triangle-down: "\f405";
  --my-font-triangle-up: "\f406";
+  --my-font-vr-headset: "\f999";
}
```
In `map-font.css`:
```diff
.icon {
  font-family: "My Custom Font";
}
.icon--close::before {
  content: var(--my-font-cross)
}
.icon--shopping-bag::before {
  content: var(--my-font-basket);
}
.icon--expand::before {
  content: var(--my-font-triangle-down);
}
.icon--collapse::before {
  content: var(--my-font-triangle-up);
}
+.icon--vr-product-view::before {
+  content: var(--my-font-vr-headset);
+}
```

## 3.4 Reuse the plus icon to build a custom "+ New configuration" button for laptop products
```html
<button><span class="icon icon--mdl-new"></span> New Configuration</button>
```

## 3.5 Add a shopping bag icon to the CTA button in buy box
Short term, a generic configurable button
```jsx
<button>
{props.buyBoxCTAIconClass ? <span className={props.buyBoxCTAIconClass}></span> : null}
<span>Add to bag</span>
</button>
```
Long term, two specialized buttons
1. `TextButton.jsx `
```jsx
<button>asdf</button>
```
2. `IconTextButton.jsx`
```jsx
<button>
  <span className={props.buyBoxCTAIconClass}></span>
  <span>Add to bag</span>
</button>
```

## 3.6 Add a custom "add to bag" icon to the CTA button in the buy box
Same as 3.3 followed by 3.5

## 3.7 Replace the plus/minus icons in the refiner with down/up chevron
Again, this is a **dangerous** change. As a result, customer will have two different icons that both mean "expand", one used in refiner, the other used in mobile site footer.
1. `map-font.css`
```diff
.icon {
  font-family: "Dynamics Commerce MDL";
}
.icon--close::before {
  content: var(--mdl-cross)
}
.icon--shopping-bag::before {
  content: var(--mdl-bag);
}
.icon--expand::before {
  content: var(--mdl-plus);
}
+.icon--expand-refiner::before {
+  content: var(--mdl-chevron-down);
+}
.icon--collapse::before {
  content: var(--mdl-minus);
}
+.icon--expand-refiner::before {
+  content: var(--mdl-chevron-up);
+}
.icon--new::before {
  content: var(--mdl-plus);
```
2. `refiner-accordion-button.html`
```diff
-<button>{props.accordionName}<span className="icon icon--expand"></span></button>
+<button>{props.accordionName}<span className="icon icon--expand-refinder"></span></button>
```


# 4 Roadmap
1. Design + CELA: approve shipping an MDL subset that customers can re-distribute on sites built on our platform. (Similar to PowerApps usage of MDL icons).
2. Engineering: provide an inventory of all the font awesome icons used in the public preview modules
3. Design (1 day): review the inventory and decide a final list of icons to include for public preview.
4. Design (1 day): map all the icons in the final list to an MDL icon
5. Design (2 days): provide the icon set file: e.g. `commerce-starterkit-mdl.woff`, the unicode declaration `declare-icons.scss` and the mapping from class names to unicodes `map-icons.scss`
6. Engineering: add the declaration and mapping css rules, and replace the existing icons class names in the modules and components markup with the new class names.

# 5 Appendix
## 5.1 Challenges with the existing system
1. **No easy way to globally replace font awesome with a different icon set (scenario 3.1).** Because we are directly consuming font awesome font class names:
![image.png](/.attachments/image-b84144e8-e720-4df2-9170-34aa6b5cc62a.png)
 we have coupled content (html) with the style (css). If we want to *globally* update style (for example, changing the icon set), we are forced to update individual content blocks. One could argue that we can override `fa` and `far` class names to load a custom font-face and override all the `fa-` class names to new unicode characters. But there are thousands of `fa-` classes to be remapped. No one has the time to redesign the entire font awesome library, so replacing only what's used in the system will be a requirement, but how would a partner dev know which ones are used in the system and which ones are not? Static code analysis maybe? We need a more robust solution.

2. **No easy way to globally replace multiple instances of an icon (scenario 3.2).** We directly consume font awesome class names in our modules. This means if we want to update all the icons that mean "expand" from the `fa-caret-down` to `fa-plus`, there is no way for me to know which caret-down icons mean "expand", and which mean "scroll down", or "dropdown", the latter two of which should NOT be changed. I need to search and replace all of them ad-hoc, and the authoring tool can hardly facilitate this workflow in GUI--it requires developer skill.



## 5.2 The need for the mapping layer
To solve the issues mentioned above, we introduce a middle mapping layer between the unicode of an icon and the intended usage of an icon. The mapping layer serves two purposes:

1. **Provide an inventory of all the icons used in the current system**. This enables global icon set replacement at any scale. See scenario 3.1.
2. **Decouple interface from implementation** The mapping establishes a 1:* relationship between icons and concepts, and enables local re-mapping a specific usage of an icon without breaking other usages of the same icon. See scenario 3.2.

## 5.3 Long term vision (1~2 years out)
- **Make scenario 3.1 and 3.2 coding free**
  - The authoring tool should be able to parse `declare-icon.css` and `map-icon.css`, and provide a GUI for authors to drag and drop icons from the declared set to the mapped set, and configure mapping. Since static analysis on CSS is much cheaper than on HTML, let alone on JSX/TSX, this is one more reason to establish the mapping layer in CSS.
  - The authoring tool should provide GUI for authors to upload custom icon fonts to use in the `declare-icon.css`.
- **Support SVG image icons:** The authoring tool should provide GUI for authors to upload SVG icons, moving the system away from icon fonts. SVG icons support multi-color, animation, and are very accessible for screen readers and high contrast mode.
- **Provide a GUI icon picker** in template authoring experience and module customization experience.