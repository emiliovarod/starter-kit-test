import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { icons, iconNames } from './index';

// Import design system tokens
import '../../tokens/index.css';

/**
 * Icon Library Gallery Component
 */
function IconGallery() {
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const filteredIcons = iconNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Search */}
      <div style={{ marginBottom: '24px', position: 'sticky', top: 0, background: '#fff', padding: '16px 0', zIndex: 10 }}>
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '8px 12px',
            fontSize: '14px',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            outline: 'none',
          }}
        />
        <span style={{ marginLeft: '12px', fontSize: '14px', opacity: 0.6 }}>
          {filteredIcons.length} of {iconNames.length} icons
        </span>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '8px',
        }}
      >
        {filteredIcons.map((name) => {
          const IconComponent = icons[name];
          if (!IconComponent) return null;
          const isSelected = selectedIcon === name;
          return (
            <button
              key={name}
              onClick={() => setSelectedIcon(isSelected ? null : name)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 8px',
                border: isSelected ? '2px solid var(--brand-primary-main, #3b82f6)' : '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: isSelected ? 'var(--brand-primary-lit-high, #eff6ff)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <span style={{ width: '24px', height: '24px' }}>
                <IconComponent />
              </span>
              <span
                style={{
                  fontSize: '9px',
                  fontFamily: 'monospace',
                  textAlign: 'center',
                  wordBreak: 'break-all',
                  lineHeight: 1.2,
                  color: '#666',
                }}
              >
                {name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Icon Details */}
      {selectedIcon && icons[selectedIcon] && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '16px 24px',
            backgroundColor: '#1a1a2e',
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            zIndex: 100,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ width: '32px', height: '32px', color: '#fff' }}>
              {React.createElement(icons[selectedIcon]!)}
            </span>
            <code style={{ fontSize: '13px', fontFamily: 'monospace' }}>
              {`<IconContainer name="${selectedIcon}" />`}
            </code>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`<IconContainer name="${selectedIcon}" />`);
              }}
              style={{
                padding: '4px 8px',
                fontSize: '12px',
                backgroundColor: '#3b82f6',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const meta = {
  title: 'Foundation/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Icon library containing **${iconNames.length} icons**.

All icons use \`currentColor\` for color inheritance.

## Usage with IconContainer

\`\`\`tsx
import { IconContainer } from './components/IconContainer';

<IconContainer name="ic-plus-outl" size="md" />
\`\`\`

## Available Sizes

- \`xs\` - 12px
- \`sm\` - 16px
- \`md\` - 20px (default)
- \`lg\` - 24px
- \`xl\` - 32px
- \`2xl\` - 40px
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/* ==========================================================================
 * GALLERY
 * ========================================================================== */

export const Gallery: Story = {
  render: () => <IconGallery />,
  parameters: {
    docs: {
      description: {
        story: 'Browse and search all available icons. Click an icon to see usage code.',
      },
    },
  },
};
