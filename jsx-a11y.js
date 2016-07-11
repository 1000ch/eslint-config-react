'use strict';

module.exports = {
  parser  : 'babel-eslint',
  plugins : [
    'react'
  ],
  parserOptions : {
    ecmaFeatures : {
      jsx : true
    }
  },
  rules: {
    'aria-props'                   : 'error', // Enforce all aria-* props are valid.
    'aria-proptypes'               : 'error', // Enforce ARIA state and property values are valid.
    'aria-role'                    : 'error', // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
    'aria-unsupported-elements'    : 'error', // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    'heading-has-content'          : 'error', // Enforce heading (h1, h2, etc) elements contain accessible content.
    'href-no-hash'                 : 'error', // Enforce an anchor element's href prop value is not just #.
    'html-has-lang'                : 'error', // Enforce <html> element has lang prop.
    'img-has-alt'                  : 'error', // Enforce that <img> JSX elements use the alt prop.
    'img-redundant-alt'            : 'error', // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
    'label-has-for'                : 'error', // Enforce that <label> elements have the htmlFor prop.
    'lang'                         : 'error', // Enforce lang attribute has a valid value.
    'mouse-events-have-key-events' : 'error', // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for 'keyboard-only users.
    'no-access-key'                : 'error', // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard 'commands used by a screenreader.
    'no-marquee'                   : 'error', // Enforce <marquee> elements are not used.
    'no-onchange'                  : 'error', // Enforce that onBlur is used instead of onChange.
    'onclick-has-focus'            : 'error', // Enforce that elements with onClick handlers must be focusable.
    'onclick-has-role'             : 'error', // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the 'role attribute.
    'role-has-required-aria-props' : 'error', // Enforce that elements with ARIA roles must have all required attributes for that 'role.
    'role-supports-aria-props'     : 'error', // Enforce that elements with explicit or implicit roles defined contain only aria-* 'properties supported by that role.
    'scope'                        : 'error', // Enforce scope prop is only used on <th> elements.
    'tabindex-no-positive'         : 'error'  // Enforce tabIndex value is not greater than zero.
  }
};
