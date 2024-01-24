1. When consuming a fragment from anywhere, you cannot see, select, change its children.
2. When editing a page based on a master template, you cannot remove a module if it will violate the min occurrence defined by master.
3. When editing a shared template based on a master template, you cannot remove a module if it will violate the min occurrence defined by master.
4. When editing a page based on a shared template, you cannot add/move/remove/rename modules in any slot

- Data can only be added on Pages, or in Fragments. Not on templates.


Assumptions:
- every module lives in a slot?
- every fragment lives in a slot?
- a page is a (special) module?

# Editing
1. A master template
2. A shared template based on master template
3. A page based on master template
4. A page based on shared template
5. A fragment

# Conditions
1. the module is defined elsewhere (from master template, or shared template, or fragment)
2. user role based permission?
3. not checked out

# Limit
- Cannot delete an item in a slot
- Cannot add an item to a slot
- Cannot move an item in a slot
- Cannot change the properties of an item in a slot
- Cannot select any item in a slot

---
1. consuming a fragment (frag is a shared module)
    1. in master
        1. no change to children
        2. no change to property
        3. can delete
    2.


- lock fragment. 
- shared template.

- page created from master: can move and change modules
- page created from shared: can't move and change modules

- page from master = template + module
- shared = template only
- page from shared = template + module

- in master, can lock property to a specific value
  - affects shared template, and page.

- in master, a module has min count.
  - in shared, the min count prevents removing of the module