# 🌌 Frontend Development Guidelines: Cinematic & Premium

These guidelines establish the standard for building state-of-the-art web applications that blend **visual excellence** with **UX psychology**.

## 1. Visual Design & Aesthetics
*   **Glassmorphism & Surfaces**: 
    *   Use `backdrop-filter: blur(12px)` for overlays and cards.
    *   Implement "Sharp Border" technique: semi-transparent white/gray border (1px) with an inner glow (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.1)`).
*   **Advanced Color Systems**: 
    *   Avoid generic colors. Use curated HSL palettes (e.g., Deep Slate `#0f172a` for backgrounds).
    *   Use **Gradients** as depth indicators, not just decoration. Use multi-step smooth transitions (e.g., `linear-gradient(135deg, slate-900 0%, indigo-950 100%)`).
*   **Shadows & Depth**: 
    *   Layered shadows for a "floating" effect. Use `0 20px 50px -12px rgba(0,0,0,0.5)`.

## 2. Advanced Typography
*   **Fonts**: Use high-quality Google Fonts (e.g., **Outfit** for headings, **Inter** for body).
*   **Hierarchy**: 
    *   Heading 1: `text-5xl font-bold tracking-tight`.
    *   Body: `text-slate-400 leading-relaxed`.
*   **Fluid Typography**: Scale font sizes dynamically based on viewport width using `clamp()`.

## 3. UX Psychology & Conversion
*   **Anchoring Bias**: Place the most premium value or feature first to set the user's perception of quality.
*   **Goal Gradient Effect**: In forms or multi-step processes, always show a progress indicator to increase completion rates.
*   **Trust Security Zones**: Clearly delineate secure areas (like checkout or login) with distinct borders or "Verified" iconography.

## 4. Motion & Interactivity
*   **Micro-interactions**: 
    *   **Buttons**: Subtle `scale-[0.98]` on click, `scale-[1.02]` on hover.
    *   **Hover States**: Use "Light Sweep" effects or color transitions with `cubic-bezier(0.4, 0, 0.2, 1)`.
*   **Staggered Reveals**: Animate list items or grid elements with a 50ms stagger to create a cinematic entry.
*   **Skeleton Screens**: Use shimmer-effect skeletons over generic loading spinners.

## 5. Technical Standards (React + TypeScript)
*   **Component Architecture**:
    *   Atomic structure: `Atoms` (Buttons, Icons) → `Molecules` (Cards, Input Fields) → `Organisms` (Navbar, Hero).
    *   Use **Strict TypeScript** for all props and state management.
*   **Tailwind Best Practices**: 
    *   Group classes: `Layout` → `Sizing` → `Spacing` → `Typography` → `Appearance` → `Animation`.
*   **Semantic HTML**: Ensure proper use of `main`, `section`, `article`, and `header` for SEO and accessibility.

## 6. Performance & Quality Assurance
*   **Image Optimization**: Always use WebP/AVIF formats.
*   **Responsive Precision**: Test across breakpoints 320px (Mobile), 768px (Tablet), 1280px (Desktop), and 1536px (Large Display).
*   **Accessibility (a11y)**: Maintain a minimum contrast ratio of 4.5:1 and provide clear `:focus-visible` states.
