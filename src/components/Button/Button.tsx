import React from 'react';
import './Button.css';
import { IconContainer, IconName } from '../IconContainer';

// Import design tokens
import '../../../tokens/index.css';

export type ButtonType = 'primary' | 'secondary' | 'text';
export type ButtonColorSet = 'main' | 'alert';
export type ButtonContent = 'text-only' | 'text-and-leading-icon' | 'text-and-trailing-icon' | 'icon-only';
export type ButtonSize = 'small' | 'regular';

export interface ButtonProps {
  /** Button label text */
  children?: React.ReactNode;
  /** Button type variant */
  type?: ButtonType;
  /** Color set variant */
  colorSet?: ButtonColorSet;
  /** Content layout variant */
  content?: ButtonContent;
  /** Size variant */
  size?: ButtonSize;
  /** Icon name (from icon library) */
  icon?: IconName;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS class names */
  className?: string;
  /** Accessible label for icon-only buttons */
  'aria-label'?: string;
  /** HTML button type attribute */
  htmlType?: 'button' | 'submit' | 'reset';
}

/**
 * Button Component
 * 
 * A versatile button component with multiple variants for type, color,
 * content layout, and size.
 * 
 * @example
 * ```tsx
 * // Primary button with text only
 * <Button type="primary" colorSet="main">Click me</Button>
 * 
 * // Secondary button with leading icon
 * <Button type="secondary" content="text-and-leading-icon" icon="ic-plus-outl">
 *   Add Item
 * </Button>
 * 
 * // Icon-only button
 * <Button type="primary" content="icon-only" icon="ic-close-outl" aria-label="Close" />
 * 
 * // Alert button
 * <Button type="primary" colorSet="alert" icon="ic-trash-bin-outl" content="text-and-leading-icon">
 *   Delete
 * </Button>
 * ```
 */
export function Button({
  children,
  type = 'primary',
  colorSet = 'main',
  content = 'text-only',
  size = 'regular',
  icon,
  disabled = false,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  htmlType = 'button',
}: ButtonProps) {
  const classes = ['button', className].filter(Boolean).join(' ');

  // Determine icon size based on button size
  const iconSize = size === 'small' ? 'sm' : 'md';

  // Render icon if provided
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className="button-icon">
        <IconContainer name={icon} size={iconSize} aria-hidden />
      </span>
    );
  };

  // For icon-only buttons, require aria-label
  const isIconOnly = content === 'icon-only';
  const buttonAriaLabel = isIconOnly ? ariaLabel : undefined;

  return (
    <button
      type={htmlType}
      className={classes}
      data-type={type}
      data-color={colorSet}
      data-content={content}
      data-size={size}
      disabled={disabled}
      onClick={onClick}
      aria-label={buttonAriaLabel}
    >
      {/* Leading icon */}
      {(content === 'text-and-leading-icon' || content === 'icon-only') && renderIcon()}
      
      {/* Text content */}
      {!isIconOnly && children && <span className="button-text">{children}</span>}
      
      {/* Trailing icon */}
      {content === 'text-and-trailing-icon' && renderIcon()}
    </button>
  );
}

export default Button;
