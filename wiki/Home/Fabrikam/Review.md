# Resources
- Designs
  - [Reviews on PDP page](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=419%3A0)
  - [Reviews details](https://www.figma.com/file/CDX6BEZZ3TfrCcN5YW987DBP/Storefront?node-id=1179%3A45629)
- Prototypes
  - [Star rating picker](https://codepen.io/chuanqisun/pen/XQpxjy)

# Content structure
## Reviews
- Header
  - Write a review
  - Star summary
  - Filter select
  - Sort by select
- Body
  - Review entry 1
  - Review entry 2
  - ...
- Footer
  - Pagination

## Review entry
- Meta
  - Stars
  - Customer name
  - [optional] Verified purchase
  - Timestamp
- Review
  - Article
    - Title
    - Body
  - Footer
    - [out of scope] Comments accordion trigger
      - [when expanded] Comment entry 1
      - [when expanded] Comment entry 2
      - [when expanded] ...
    - Vote up/down
    - Report it/Reported

## [out of scope] Comment entry
- Comment article
  - Title
  - body
- Reply


# Interaction Notes
- If user hasn't signed in, "Write a review" will take them to AAD B2C sign-in/up page. Once the sign-in/up is successful, user will be redirected back to the page where they were, and the "Write a review" should be auto focused, and scrolled into view.
- If user hasn't signed in, "Vote up", "Vote down", "Report it" will take them to AAD B2C sign-in/up page. Once the sign-in/up is successful, user will be redirected back to the page where they were, and the desired action will be automatically performed.
- "Report it" is a link. Once the report is finished, it turns into "Reported", a static text badge.
- If user has already left a review, and they click Write a review again, after signing in: 
  - If the review is pending, show a “your review is pending dialog”.
  - If the review has been approved, show an editing dialog with existing review content pre-populated. (This is a short term solution, long term we want to send user to account management page to track and follow up their reviews)
  - If the account has been banned by moderator, show an “account banned” dialog.
- After reporting a review, we provide feedback in the dialog and also update the "Report it" to "Reported" inline.

- [out of scope] The "reply" button is displayed only if all of the following conditions are met:
  - the user is signed in, and
  - the thread was started by the signed in user, and
  - the moderator has replied to the thread