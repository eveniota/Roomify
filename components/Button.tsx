import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | (string & {});
export type ButtonSize = 'sm' | 'md' | 'lg' | (string & {});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  fullwidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      fullwidth = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const isFullWidth = Boolean(fullWidth || fullwidth);

    const combinedClasses = [
      'btn',
      variant ? `btn--${variant}` : '',
      size ? `btn--${size}` : '',
      isFullWidth ? 'btn--full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
