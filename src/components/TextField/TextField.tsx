import React, { forwardRef } from 'react';
import './TextField.css';
import { IconContainer, IconName } from '../IconContainer';

// Import design tokens
import '../../../tokens/index.css';

export type TextFieldSize = 'small' | 'medium';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size variant */
  size?: TextFieldSize;
  /** Decorative icon on the left (aria-hidden) */
  leadingIcon?: IconName;
  /** Action icon on the right (interactive button) */
  actionIcon?: IconName;
  /** Accessible label for the action icon button */
  actionIconLabel?: string;
  /** Handler for action icon click */
  onActionClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Whether the input is in an error state */
  hasError?: boolean;
  /** Whether the input is in a success state */
  hasSuccess?: boolean;
  /** Whether to truncate text with ellipsis when it exceeds field width */
  truncate?: boolean;
  /** Additional CSS class names for the wrapper */
  wrapperClassName?: string;
}

/**
 * TextField Component
 * 
 * A styled input field with optional decorative leading icon and
 * interactive action icon. Handles visual states through CSS.
 * 
 * This component handles only the input visual layer. For label,
 * help text, and error messages, wrap with the Field component.
 * 
 * @example
 * ```tsx
 * // Basic input
 * <TextField placeholder="Enter text" />
 * 
 * // With leading icon
 * <TextField leadingIcon="ic-user-outl" placeholder="Enter username" />
 * 
 * // With action icon (e.g., password visibility toggle)
 * <TextField 
 *   type="password"
 *   actionIcon="ic-eye-outl" 
 *   actionIconLabel="Show password"
 *   onActionClick={() => togglePassword()}
 * />
 * 
 * // With truncation enabled
 * <TextField 
 *   truncate
 *   defaultValue="This is a very long text that will be truncated"
 * />
 * ```
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  leadingIcon,
  actionIcon,
  actionIconLabel,
  onActionClick,
  hasError = false,
  hasSuccess = false,
  truncate = false,
  wrapperClassName = '',
  className = '',
  disabled,
  ...inputProps
}, ref) => {
  // Determine icon size based on input size
  const iconSize = size === 'small' ? 'sm' : 'md';

  // Build wrapper classes
  const wrapperClasses = [
    'text-field',
    wrapperClassName
  ].filter(Boolean).join(' ');

  // Build input classes
  const inputClasses = [
    'text-field-input',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={wrapperClasses}
      data-size={size}
      data-has-leading-icon={leadingIcon ? 'true' : undefined}
      data-has-action-icon={actionIcon ? 'true' : undefined}
      data-error={hasError ? 'true' : undefined}
      data-success={hasSuccess ? 'true' : undefined}
      data-disabled={disabled ? 'true' : undefined}
      data-truncate={truncate ? 'true' : undefined}
    >
      {/* Decorative leading icon */}
      {leadingIcon && (
        <span className="text-field-leading-icon">
          <IconContainer name={leadingIcon} size={iconSize} aria-hidden />
        </span>
      )}

      {/* Native input */}
      <input
        ref={ref}
        className={inputClasses}
        disabled={disabled}
        aria-invalid={hasError ? 'true' : undefined}
        {...inputProps}
      />

      {/* Interactive action icon */}
      {actionIcon && (
        <button
          type="button"
          className="text-field-action-icon"
          onClick={onActionClick}
          disabled={disabled}
          aria-label={actionIconLabel}
          tabIndex={disabled ? -1 : 0}
        >
          <IconContainer name={actionIcon} size={iconSize} aria-hidden />
        </button>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';

export default TextField;
