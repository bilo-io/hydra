import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string | React.ReactElement | React.ReactElement[] | null;
    color?: string; // Optional prop to override the theme text color
}

export const Text: React.FC<TextProps> = ({ color, children, style, ...props }) => {
    const { theme } = useTheme();

    return (
        <span
            {...props}
            style={{
                color: color || theme.text, // Use the provided color or fallback to theme.text
                ...style, // Allow additional styles to be passed
            }}
        >
            {children}
        </span>
    );
};

export default Text;
