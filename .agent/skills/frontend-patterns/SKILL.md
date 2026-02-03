---
name: frontend-patterns
description: Premium and Cinematic UI patterns for high-end web applications.
---

# 🎨 Frontend Patterns Skill

This skill provides a set of highly polished, premium UI patterns and components designed to wow users. Use these as a foundation for building cinematic web experiences.

## 🛠️ Provided Resources

### 1. Components Library (`resources/components/`)
A collection of reusable, premium-styled React components.
- `GlassCard`: A semi-transparent card with backdrop blur and inner glow.
- `CinematicButton`: A button with scale micro-interactions and light sweep effects.
- `PremiumInput`: Form inputs with tactile focus states and floating labels.

### 2. Design System Tokens (`resources/design-system/`)
Pre-defined CSS/Tailwind variables for a harmonious aesthetic.
- `colors.json`: HSL-based palettes for deep backgrounds and vibrant accents.
- `typography.json`: Scale and clamp configurations for fluid type.

## 🚀 Usage Instructions

### General Principles
- **Always use Glassmorphism**: For overlays and cards, use `backdrop-filter: blur(12px)`.
- **Inner Glows**: Use an inset box shadow to create a "sharp edge" on borders.
- **Micro-animations**: Every interactive element should have a subtle response (scale, opacity, or color shift).

### Creating a Cinematic Section
1. **Background**: Use a subtle angular gradient (e.g., 135deg) with deep slate/indigo hues.
2. **Layout**: Use staggered reveals (50ms offset) for entrance animations.
3. **Detail**: Use `generate_image` to create unique, high-fidelity background assets or product shots.

## 📜 Scripts
- `scripts/scaffold-premium-component.js`: A utility to quickly generate a component following these guidelines.
