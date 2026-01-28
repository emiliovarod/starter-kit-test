import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextField, TextFieldSize } from './TextField';
import { Field } from './Field';

// Import design tokens for Storybook
import '../../../tokens/index.css';
import '../../../styles/index.css';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A styled input field with optional decorative leading icon and interactive action icon. Handles visual states through CSS. For label, help text, and error messages, wrap with the Field component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Size variant of the text field',
    },
    leadingIcon: {
      control: 'text',
      description: 'Icon name for decorative leading icon',
    },
    actionIcon: {
      control: 'text',
      description: 'Icon name for interactive action icon',
    },
    actionIconLabel: {
      control: 'text',
      description: 'Accessible label for action icon button',
    },
    hasError: {
      control: 'boolean',
      description: 'Whether the input is in error state',
    },
    hasSuccess: {
      control: 'boolean',
      description: 'Whether the input is in success state',
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate text with ellipsis when it exceeds field width',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '364px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

/* ==========================================================================
 * DEFAULT
 * ========================================================================== */

export const Default: Story = {
  args: {
    placeholder: 'Input text',
    size: 'medium',
  },
};

/* ==========================================================================
 * SIZE VARIANTS
 * ========================================================================== */

export const SizeVariants: Story = {
  args: {
    placeholder: 'Input text',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Medium (default)</h4>
        <TextField size="medium" placeholder="Medium size input" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Small</h4>
        <TextField size="small" placeholder="Small size input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size variants: Medium (default, 48px height) and Small (32px height).',
      },
    },
  },
};

/* ==========================================================================
 * CONTENT VARIANTS
 * ========================================================================== */

export const ContentVariants: Story = {
  args: {
    placeholder: 'Input text',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Input Only</h4>
        <TextField placeholder="Input only" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Leading Icon</h4>
        <TextField leadingIcon="ic-user-outl" placeholder="With leading icon" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Action Icon</h4>
        <TextField actionIcon="ic-eye-outl" actionIconLabel="Toggle visibility" placeholder="With action icon" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Leading and Action Icon</h4>
        <TextField leadingIcon="ic-envelope-outl" actionIcon="ic-close-outl" actionIconLabel="Clear input" placeholder="With both icons" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Content layout variants: Input only, Leading icon, Action icon, and Leading + Action icon.',
      },
    },
  },
};

/* ==========================================================================
 * STATE VARIANTS
 * ========================================================================== */

export const StateVariants: Story = {
  args: {
    placeholder: 'Input text',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Default</h4>
        <TextField placeholder="Default state" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#666' }}>
          Hover and Focus states visible on interaction
        </p>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Filled</h4>
        <TextField defaultValue="Filled content" placeholder="Placeholder" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Disabled</h4>
        <TextField disabled placeholder="Disabled state" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Error</h4>
        <TextField hasError defaultValue="Invalid input" placeholder="Error state" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Success</h4>
        <TextField hasSuccess defaultValue="Valid input" placeholder="Success state" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input states: Default, Filled, Disabled, Error, and Success.',
      },
    },
  },
};

/* ==========================================================================
 * TEXT OVERFLOW VARIANTS
 * ========================================================================== */

export const TextOverflowVariants: Story = {
  args: {
    placeholder: 'Input text',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Default (No Truncate)</h4>
        <TextField defaultValue="This is a very long text that demonstrates how the field handles overflow without truncation enabled" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Truncate</h4>
        <TextField truncate defaultValue="This is a very long text that will be truncated with an ellipsis when it reaches the field width" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text overflow behavior: Default (scrollable) and Truncate (ellipsis).',
      },
    },
  },
};

/* ==========================================================================
 * FIELD VARIANTS
 * ========================================================================== */

export const FieldVariants: Story = {
  args: {
    placeholder: 'Input text',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>With Label</h4>
        <Field label="Label">
          <TextField placeholder="Input text" />
        </Field>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>With Label and Helper Text</h4>
        <Field label="Label" helpText="Helper text for additional context.">
          <TextField placeholder="Input text" />
        </Field>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>With Error Text</h4>
        <Field label="Password" errorText="Password must be at least 8 characters.">
          <TextField type="password" defaultValue="123" />
        </Field>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>With Success Text</h4>
        <Field label="Username" successText="Username is available!">
          <TextField defaultValue="johndoe" />
        </Field>
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500 }}>Disabled Field</h4>
        <Field label="Disabled Field" helpText="This field is disabled." disabled>
          <TextField placeholder="Cannot edit" />
        </Field>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Field wrapper variants: Label only, Label + Helper, Error, Success, and Disabled.',
      },
    },
  },
};

/* ==========================================================================
 * FULL MATRIX: MEDIUM SIZE
 * ========================================================================== */

export const MediumMatrix: Story = {
  render: () => {
    const contents = ['input-only', 'leading-icon', 'action-icon', 'both-icons'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 600 }}>
          Medium Size
        </h3>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>State</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Input Only</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Leading Icon</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Action Icon</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Both Icons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Default</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" placeholder="Input text" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" placeholder="Input text" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" actionIcon="ic-eye-outl" actionIconLabel="Action" placeholder="Input text" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" placeholder="Input text" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Filled</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" defaultValue="Value" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" defaultValue="Value" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" actionIcon="ic-eye-outl" actionIconLabel="Action" defaultValue="Value" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" defaultValue="Value" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Disabled</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" disabled placeholder="Disabled" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" disabled placeholder="Disabled" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" actionIcon="ic-eye-outl" actionIconLabel="Action" disabled placeholder="Disabled" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" disabled placeholder="Disabled" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Error</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" hasError defaultValue="Invalid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" hasError defaultValue="Invalid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" actionIcon="ic-eye-outl" actionIconLabel="Action" hasError defaultValue="Invalid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" hasError defaultValue="Invalid" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Success</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" hasSuccess defaultValue="Valid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" hasSuccess defaultValue="Valid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" actionIcon="ic-eye-outl" actionIconLabel="Action" hasSuccess defaultValue="Valid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="medium" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" hasSuccess defaultValue="Valid" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Full matrix of Medium size TextField variants.',
      },
    },
  },
};

/* ==========================================================================
 * FULL MATRIX: SMALL SIZE
 * ========================================================================== */

export const SmallMatrix: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 600 }}>
          Small Size
        </h3>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>State</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Input Only</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Leading Icon</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Action Icon</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>Both Icons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Default</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" placeholder="Input text" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" placeholder="Input text" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" actionIcon="ic-eye-outl" actionIconLabel="Action" placeholder="Input text" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" placeholder="Input text" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Filled</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" defaultValue="Value" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" defaultValue="Value" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" actionIcon="ic-eye-outl" actionIconLabel="Action" defaultValue="Value" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" defaultValue="Value" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Disabled</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" disabled placeholder="Disabled" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" disabled placeholder="Disabled" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" actionIcon="ic-eye-outl" actionIconLabel="Action" disabled placeholder="Disabled" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" disabled placeholder="Disabled" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Error</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" hasError defaultValue="Invalid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" hasError defaultValue="Invalid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" actionIcon="ic-eye-outl" actionIconLabel="Action" hasError defaultValue="Invalid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" hasError defaultValue="Invalid" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Success</td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" hasSuccess defaultValue="Valid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" hasSuccess defaultValue="Valid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" actionIcon="ic-eye-outl" actionIconLabel="Action" hasSuccess defaultValue="Valid" />
              </td>
              <td style={{ padding: '12px 16px' }}>
                <TextField size="small" leadingIcon="ic-user-outl" actionIcon="ic-close-outl" actionIconLabel="Clear" hasSuccess defaultValue="Valid" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Full matrix of Small size TextField variants.',
      },
    },
  },
};

/* ==========================================================================
 * FULL MATRIX: FIELD WITH LABELS
 * ========================================================================== */

export const FieldMatrix: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 600 }}>
          Field Component Matrix
        </h3>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>State</th>
              <th style={{ padding: '8px 16px', textAlign: 'center', fontSize: '12px', borderBottom: '1px solid #e0e0e0' }}>With Helper Text</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Empty</td>
              <td style={{ padding: '12px 16px' }}>
                <Field label="Label" helpText="Helper text.">
                  <TextField placeholder="Input text" />
                </Field>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Filled</td>
              <td style={{ padding: '12px 16px' }}>
                <Field label="Label" helpText="Helper text.">
                  <TextField defaultValue="Filled value" />
                </Field>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Disabled</td>
              <td style={{ padding: '12px 16px' }}>
                <Field label="Label" helpText="Helper text." disabled>
                  <TextField placeholder="Input text" />
                </Field>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Error</td>
              <td style={{ padding: '12px 16px' }}>
                <Field label="Label" errorText="Error message.">
                  <TextField hasError defaultValue="Invalid" />
                </Field>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '12px' }}>Success</td>
              <td style={{ padding: '12px 16px' }}>
                <Field label="Label" successText="Success message.">
                  <TextField hasSuccess defaultValue="Valid" />
                </Field>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Full matrix of Field component variants with labels, helper text, and validation states.',
      },
    },
  },
};
