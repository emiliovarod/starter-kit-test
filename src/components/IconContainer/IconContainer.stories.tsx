import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { IconContainer, IconSize } from './IconContainer';

const meta = {
  title: 'Components/IconContainer',
  component: IconContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A non-interactive icon container used as a visual indicator. Color is inherited from the parent element via CSS `color` property.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the icon to display (e.g., ic-plus-outl)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size variant of the icon',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
    'aria-hidden': {
      control: 'boolean',
      description: 'Whether the icon is decorative (hidden from screen readers)',
    },
  },
} satisfies Meta<typeof IconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ==========================================================================
 * DEFAULT STORY
 * ========================================================================== */

export const Default: Story = {
  args: {
    name: 'ic-plus-outl',
    size: 'md',
  },
};

/* ==========================================================================
 * SIZE VARIANTS
 * ========================================================================== */

export const SizeXS: Story = {
  args: {
    name: 'ic-plus-outl',
    size: 'xs',
  },
};

export const SizeSM: Story = {
  args: {
    name: 'ic-plus-outl',
    size: 'sm',
  },
};

export const SizeMD: Story = {
  args: {
    name: 'ic-plus-outl',
    size: 'md',
  },
};

export const SizeLG: Story = {
  args: {
    name: 'ic-plus-outl',
    size: 'lg',
  },
};

export const SizeXL: Story = {
  args: {
    name: 'ic-plus-outl',
    size: 'xl',
  },
};

export const Size2XL: Story = {
  args: {
    name: 'ic-plus-outl',
    size: '2xl',
  },
};

/* ==========================================================================
 * ALL SIZES COMPARISON
 * ========================================================================== */

const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const sizeValues: Record<IconSize, string> = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
};

export const AllSizes: Story = {
  args: {
    name: 'ic-star-outl',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px' }}>
      {sizes.map((size) => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <IconContainer {...args} size={size} />
          <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{size}</span>
          <span style={{ fontSize: '10px', opacity: 0.6 }}>{sizeValues[size]}</span>
        </div>
      ))}
    </div>
  ),
};

/* ==========================================================================
 * COLOR INHERITANCE
 * ========================================================================== */

export const ColorInheritance: Story = {
  args: {
    name: 'ic-heart-outl',
    size: 'lg',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ color: 'var(--brand-primary-main)' }}>
        <IconContainer {...args} />
      </div>
      <div style={{ color: 'var(--system-success-main)' }}>
        <IconContainer {...args} name="ic-check-outl" />
      </div>
      <div style={{ color: 'var(--system-error-main)' }}>
        <IconContainer {...args} name="ic-close-outl" />
      </div>
      <div style={{ color: 'var(--system-warning-main)' }}>
        <IconContainer {...args} name="ic-exclamation-circle-outl" />
      </div>
      <div style={{ color: 'var(--brand-accent-main)' }}>
        <IconContainer {...args} name="ic-star-outl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons inherit color from their parent via `currentColor`.',
      },
    },
  },
};

/* ==========================================================================
 * ACCESSIBILITY
 * ========================================================================== */

export const WithAriaLabel: Story = {
  args: {
    name: 'ic-bell-outl',
    size: 'lg',
    'aria-label': 'Notifications',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `aria-label` is provided, the icon gets `role="img"` for accessibility.',
      },
    },
  },
};
