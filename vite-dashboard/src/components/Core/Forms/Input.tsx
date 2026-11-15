import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ ...props }) => {
    const { theme } = useTheme();

    return (
        <input {...props} style={{ color: theme.text, background: theme.background }} />
    );
};

export default Input;