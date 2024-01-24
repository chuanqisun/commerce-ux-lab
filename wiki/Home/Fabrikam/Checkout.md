# Resources
- Prototypes
  - [Ayden customization](https://codepen.io/chuanqisun/pen/RObyam)
  - Form controls in [Components & Styles](/Home/Fabrikam/Components-&-Styles-&-Patterns)
  - [Shopping bag responsive layout 768px - ∞](https://codepen.io/chuanqisun/pen/qwYWME)

# Content structure
## Shopping bag item
1 - Image
2 - Non-image group
    2.1 - Key info group
        2.1.1 - Title, option, unit price
        2.1.2 - Quantity with stepper
        2.1.3. - Subtotal
    2.2 - Shipping info
    2.3 - Actions (move to wishlist, remove)

# Design limitations
- Gift card handling logic:
  - We don't want to show the new remaining balance before the order is placed. In principle, we want the displayed gift card remaining balance to always match the real balance at that moment in time. So before user place the order, we want to only show the current balance, and after the order, if the backend can return the new remaining balance, we want to show the new remaining balance on the order confirmation page. But I think that's out of scope.
  - If gift card balance > order amount, hide the credit card form, even if user already filled out the credit card form
- Ayden (the payment instrumentation plugin) offers three levels of integration
  - Checkout SDK: the entire checkout UX is handled by Ayden. This option is not suitable due to lack of control
  - Card Component: form labels and boxes will are fully customizable through css override. Input fields, including placeholder and text can be customized through [a very limited API](https://docs.adyen.com/developers/checkout/web-sdk/customization/styling). Notably, we cannot use web fonts for user typed texts and placeholder texts.
  - API + Bring your own front-end: we can style the form anyway we like but the cost for front-end engineering and security engineering is high.