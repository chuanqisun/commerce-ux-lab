## 1. Set the constraints to prevent poor design decisions.
- e.g. #1 user can only choose certain font sizes, instead of arbitrary sizes.
- e.g. #2 content font has “–light –bold” modifiers, but display font does not.

## 2. Be self-documented and self-evident to its users.
- e.g. Each display font has two target view port. It’s apparent that adding “–mobile” modifier will get them the size needed for mobile viewport.

## 3. Provide the right amount of encapsulation to ensure certain styles always go together.
- e.g. display font should always be in ALL CAPS; 

## 4. Expose the right amount of utility to make the system open to extensions but closed to modifications (open-closed principle)
- e.g. developers can combine “–light –bold” modifiers to any content font to create new text styles that are not prescribed in the existing fabrikam design.
