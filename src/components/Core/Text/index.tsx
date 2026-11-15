import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: string;
}

export const Text: React.FC<TextProps> = ({ color, children, style, className, ...props }) => {
  return (
    <span
      {...props}
      className={`text-foreground ${className || ''}`.trim()}
      style={{
        ...(color ? { color } : {}),
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Text;
