import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

 
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | React.ReactElement | React.ReactElement[] | null
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const { theme } = useTheme();
    
    return (
        <button
            {...props}
            style={{
                backgroundColor: theme.primary,
                color: '#FFF',
            }}
        />
    );
};

export default Button;