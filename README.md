# Material UX Starter Kit

A design system built with HTML, CSS Variables, and React components.

## Features

- **Token Architecture**: Primitives → Semantic → Component tokens
- **Components**: Button, TextField, Field, IconContainer
- **270+ Icons**: SVG icons as React components
- **Storybook**: Component documentation and visual testing
- **Chromatic**: Visual regression testing

## Getting Started

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Run Chromatic
npm run chromatic
```

## Token Structure

```
tokens/
├── primitives/     # Raw values (colors, spacing, typography)
├── semantic/       # Contextual tokens referencing primitives
└── components/     # Component-specific tokens referencing semantic
```

## Components

- **Button** - Primary, Secondary, Text variants with multiple sizes and states
- **TextField** - Input field with leading/action icons and validation states
- **Field** - Wrapper for labels, help text, and error messages
- **IconContainer** - Icon component with size variants
