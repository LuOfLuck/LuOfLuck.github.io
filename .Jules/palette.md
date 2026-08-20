## 2024-05-14 - Semantic Elements and Accessible Icon-Only Buttons
**Learning:** Found interactive icon-only elements like "Back to Top" implemented as generic `<div>` tags and toggler buttons missing `aria-label`s, rendering them inaccessible or confusing to screen reader users.
**Action:** Always use semantic `<button>` tags for clickable actions and ensure icon-only buttons include descriptive `aria-label`s along with `aria-hidden="true"` on the visual icon elements.
