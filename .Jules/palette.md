## 2024-05-18 - Missing ARIA labels on utility buttons
**Learning:** Icon-only buttons used for utility functions (like scroll-to-top, navbar toggles) lack accessible names, confusing screen reader users.
**Action:** Add `aria-label`s to all interactive elements that rely solely on visual icons. Change non-semantic interactive `<div>`s to `<button>`s where appropriate.
