## 2025-02-23 - Icon-Only Button Accessibility
**Learning:** Found multiple instances where interactive icons (like the back-to-top scroll and mobile menu toggler) lacked screen reader context, and the back-to-top element used a `<div>` which prevented keyboard navigation. Also discovered nested `<button>` inside `<a>` which creates confusing tab-stops for screen readers.
**Action:** Always convert interactive `<div>` elements to `<button>` with appropriate `aria-label`s for keyboard/screen reader support, add `aria-label` to icon-only buttons, and avoid nesting interactive elements.
