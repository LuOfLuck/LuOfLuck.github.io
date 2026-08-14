## 2026-08-14 - Semantic Tags for Custom Controls
**Learning:** In a vanilla HTML/CSS/jQuery stack without modern components, interactive elements like "scroll to top" buttons are often built as `<div>`s instead of semantic buttons, which breaks tab navigation and screen reader support out-of-the-box.
**Action:** Always scan for generic block elements (div, span) masquerading as buttons, convert them to `<button>` tags, and apply `aria-label` when they contain only an icon.
