import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button, ButtonType, ButtonColorSet, ButtonContent, ButtonSize } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile button component with multiple variants for type, color set, content layout, and size.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Button type variant',
    },
    colorSet: {
      control: 'select',
      options: ['main', 'alert'],
      description: 'Color set variant',
    },
    content: {
      control: 'select',
      options: ['text-only', 'text-and-leading-icon', 'text-and-trailing-icon', 'icon-only'],
      description: 'Content layout variant',
    },
    size: {
      control: 'select',
      options: ['small', 'regular'],
      description: 'Size variant',
    },
    icon: {
      control: 'text',
      description: 'Icon name from icon library',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ==========================================================================
 * DEFAULT
 * ========================================================================== */

export const Default: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    colorSet: 'main',
    content: 'text-only',
    size: 'regular',
  },
};

/* ==========================================================================
 * TYPE VARIANTS
 * ========================================================================== */

export const TypeVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="text">Text</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The three button types: Primary (filled), Secondary (outlined), and Text (link-style).',
      },
    },
  },
};

/* ==========================================================================
 * COLOR SET VARIANTS
 * ========================================================================== */

export const ColorSetVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Main</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="primary" colorSet="main">Primary Main</Button>
          <Button type="secondary" colorSet="main">Secondary Main</Button>
          <Button type="text" colorSet="main">Text Main</Button>
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Alert</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="primary" colorSet="alert">Primary Alert</Button>
          <Button type="secondary" colorSet="alert">Secondary Alert</Button>
          <Button type="text" colorSet="alert">Text Alert</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Color set variants: Main (brand colors) and Alert (error/danger colors).',
      },
    },
  },
};

/* ==========================================================================
 * CONTENT VARIANTS
 * ========================================================================== */

export const ContentVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Text Only</h4>
        <Button content="text-only">Text Only</Button>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Text and Leading Icon</h4>
        <Button content="text-and-leading-icon" icon="ic-plus-outl">Add Item</Button>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Text and Trailing Icon</h4>
        <Button content="text-and-trailing-icon" icon="ic-angle-right-outl">Continue</Button>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Icon Only</h4>
        <Button content="icon-only" icon="ic-plus-outl" aria-label="Add" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Content layout variants: Text only, Text and leading icon, Text and trailing icon, and Icon only.',
      },
    },
  },
};

/* ==========================================================================
 * SIZE VARIANTS
 * ========================================================================== */

export const SizeVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Small (32px)</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small">Text Only</Button>
          <Button size="small" content="text-and-leading-icon" icon="ic-plus-outl">Leading</Button>
          <Button size="small" content="text-and-trailing-icon" icon="ic-angle-right-outl">Trailing</Button>
          <Button size="small" content="icon-only" icon="ic-plus-outl" aria-label="Add" />
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Regular (48px)</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="regular">Text Only</Button>
          <Button size="regular" content="text-and-leading-icon" icon="ic-plus-outl">Leading</Button>
          <Button size="regular" content="text-and-trailing-icon" icon="ic-angle-right-outl">Trailing</Button>
          <Button size="regular" content="icon-only" icon="ic-plus-outl" aria-label="Add" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size variants: Small (32px height) and Regular (48px height).',
      },
    },
  },
};

/* ==========================================================================
 * STATE VARIANTS
 * ========================================================================== */

export const StateVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Primary States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="primary">Default</Button>
          <Button type="primary" disabled>Disabled</Button>
        </div>
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#666' }}>
          Hover and Pressed states visible on interaction
        </p>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Secondary States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="secondary">Default</Button>
          <Button type="secondary" disabled>Disabled</Button>
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Text States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="text">Default</Button>
          <Button type="text" disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button states: Default, Hover, Pressed, and Disabled.',
      },
    },
  },
};

/* ==========================================================================
 * FULL MATRIX: PRIMARY
 * ========================================================================== */

export const PrimaryMatrix: Story = {
  render: () => {
    const sizes: ButtonSize[] = ['regular', 'small'];
    const contents: ButtonContent[] = ['text-only', 'text-and-leading-icon', 'text-and-trailing-icon', 'icon-only'];
    const colorSets: ButtonColorSet[] = ['main', 'alert'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {colorSets.map((colorSet) => (
          <div key={colorSet}>
            <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 600, textTransform: 'capitalize' }}>
              Primary {colorSet}
            </h3>
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Size</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text Only</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text + Leading Icon</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text + Trailing Icon</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Icon Only</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Disabled</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => (
                  <tr key={size}>
                    <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="primary" colorSet={colorSet} size={size}>Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="primary" colorSet={colorSet} size={size} content="text-and-leading-icon" icon="ic-plus-outl">Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="primary" colorSet={colorSet} size={size} content="text-and-trailing-icon" icon="ic-angle-right-outl">Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="primary" colorSet={colorSet} size={size} content="icon-only" icon="ic-plus-outl" aria-label="Add" />
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="primary" colorSet={colorSet} size={size} disabled>Button</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Full matrix of Primary button variants.',
      },
    },
  },
};

/* ==========================================================================
 * FULL MATRIX: SECONDARY
 * ========================================================================== */

export const SecondaryMatrix: Story = {
  render: () => {
    const sizes: ButtonSize[] = ['regular', 'small'];
    const colorSets: ButtonColorSet[] = ['main', 'alert'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {colorSets.map((colorSet) => (
          <div key={colorSet}>
            <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 600, textTransform: 'capitalize' }}>
              Secondary {colorSet}
            </h3>
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Size</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text Only</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text + Leading Icon</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text + Trailing Icon</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Icon Only</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Disabled</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => (
                  <tr key={size}>
                    <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="secondary" colorSet={colorSet} size={size}>Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="secondary" colorSet={colorSet} size={size} content="text-and-leading-icon" icon="ic-plus-outl">Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="secondary" colorSet={colorSet} size={size} content="text-and-trailing-icon" icon="ic-angle-right-outl">Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="secondary" colorSet={colorSet} size={size} content="icon-only" icon="ic-plus-outl" aria-label="Add" />
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="secondary" colorSet={colorSet} size={size} disabled>Button</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Full matrix of Secondary button variants.',
      },
    },
  },
};

/* ==========================================================================
 * FULL MATRIX: TEXT
 * ========================================================================== */

export const TextMatrix: Story = {
  render: () => {
    const sizes: ButtonSize[] = ['regular', 'small'];
    const colorSets: ButtonColorSet[] = ['main', 'alert'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {colorSets.map((colorSet) => (
          <div key={colorSet}>
            <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 600, textTransform: 'capitalize' }}>
              Text {colorSet}
            </h3>
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Size</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text Only</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text + Leading Icon</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Text + Trailing Icon</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Disabled</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => (
                  <tr key={size}>
                    <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="text" colorSet={colorSet} size={size}>Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="text" colorSet={colorSet} size={size} content="text-and-leading-icon" icon="ic-plus-outl">Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="text" colorSet={colorSet} size={size} content="text-and-trailing-icon" icon="ic-angle-right-outl">Button</Button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <Button type="text" colorSet={colorSet} size={size} disabled>Button</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Full matrix of Text button variants.',
      },
    },
  },
};
