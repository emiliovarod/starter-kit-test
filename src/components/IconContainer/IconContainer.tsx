import React from 'react';
import './IconContainer.css';

// Import icon library
import { icons, IconName as IconNameType } from '../../icons';

export type IconName = IconNameType;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IconContainerProps {
  /** Name of the icon to display */
  name: IconName;
  /** Size variant of the icon */
  size?: IconSize;
  /** Additional CSS class names */
  className?: string;
  /** Accessible label for screen readers */
  'aria-label'?: string;
  /** Whether the icon is decorative (hidden from screen readers) */
  'aria-hidden'?: boolean;
}

/**
 * Icon Container
 * 
 * A non-interactive icon used exclusively as a visual indicator 
 * to convey status, category, or context without requiring user interaction.
 * 
 * Color is inherited from the parent element via CSS `color` property.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <IconContainer name="ic-plus-outl" size="md" />
 * 
 * // With custom color (inherited from parent)
 * <span style={{ color: 'var(--brand-primary-main)' }}>
 *   <IconContainer name="ic-check-outl" size="lg" />
 * </span>
 * 
 * // With accessibility label
 * <IconContainer name="ic-exclamation-circle-outl" size="sm" aria-label="Warning" />
 * ```
 */
export function IconContainer({
  name,
  size = 'md',
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconContainerProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizeClass = `icon-${size}`;
  const classes = ['icon', sizeClass, className].filter(Boolean).join(' ');

  // If no aria-label is provided, assume the icon is decorative
  const isDecorative = ariaHidden ?? !ariaLabel;

  return (
    <span
      className={classes}
      role={isDecorative ? 'presentation' : 'img'}
      aria-label={ariaLabel}
      aria-hidden={isDecorative}
    >
      <IconComponent />
    </span>
  );
}

export default IconContainer;
