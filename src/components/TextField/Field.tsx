import React, { useId } from 'react';
import './Field.css';

// Import design tokens
import '../../../tokens/index.css';

export interface FieldProps {
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helpText?: string;
  /** Error message displayed below the input (replaces helpText when present) */
  errorText?: string;
  /** Success message displayed below the input (replaces helpText when present) */
  successText?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Custom id for the input (auto-generated if not provided) */
  inputId?: string;
  /** The input element (TextField or other input component) */
  children: React.ReactElement;
  /** Additional CSS class names */
  className?: string;
}

/**
 * Field Component
 * 
 * A wrapper component that provides label, help text, error text,
 * and accessibility features for form inputs.
 * 
 * @example
 * ```tsx
 * // Basic field with label and help text
 * <Field label="Email" helpText="We'll never share your email.">
 *   <TextField placeholder="Enter your email" />
 * </Field>
 * 
 * // Field with error state
 * <Field label="Password" errorText="Password must be at least 8 characters">
 *   <TextField type="password" hasError />
 * </Field>
 * ```
 */
export function Field({
  label,
  helpText,
  errorText,
  successText,
  disabled = false,
  inputId,
  children,
  className = '',
}: FieldProps) {
  // Auto-generate IDs for accessibility
  const generatedId = useId();
  const id = inputId || generatedId;
  const helpTextId = `${id}-help`;
  const errorTextId = `${id}-error`;
  const successTextId = `${id}-success`;

  // Determine which description ID to use
  const hasError = Boolean(errorText);
  const hasSuccess = Boolean(successText) && !hasError;
  const hasHelpText = Boolean(helpText) && !hasError && !hasSuccess;
  
  let describedById: string | undefined;
  if (hasError) {
    describedById = errorTextId;
  } else if (hasSuccess) {
    describedById = successTextId;
  } else if (hasHelpText) {
    describedById = helpTextId;
  }

  // Clone the child input with accessibility props
  const enhancedChild = React.cloneElement(children, {
    id,
    'aria-describedby': describedById,
    'aria-invalid': hasError ? 'true' : undefined,
    hasError: hasError,
    hasSuccess: hasSuccess,
    disabled: disabled || children.props.disabled,
  });

  const wrapperClasses = [
    'field',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={wrapperClasses}
      data-disabled={disabled ? 'true' : undefined}
      data-error={hasError ? 'true' : undefined}
      data-success={hasSuccess ? 'true' : undefined}
    >
      {/* Label */}
      {label && (
        <label htmlFor={id} className="field-label">
          {label}
        </label>
      )}

      {/* Input */}
      {enhancedChild}

      {/* Help text (shown when no error/success) */}
      {hasHelpText && (
        <p id={helpTextId} className="field-help-text">
          {helpText}
        </p>
      )}

      {/* Error text */}
      {hasError && (
        <p id={errorTextId} className="field-error-text" role="alert">
          {errorText}
        </p>
      )}

      {/* Success text */}
      {hasSuccess && (
        <p id={successTextId} className="field-success-text">
          {successText}
        </p>
      )}
    </div>
  );
}

export default Field;
