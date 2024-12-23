// ThemeStyles.tsx
import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

export const ThemeStyles = () => {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.text;
    }, [theme]);

    return null;
};
