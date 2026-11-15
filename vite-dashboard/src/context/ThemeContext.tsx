// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themes } from '../themes';

// Define a context shape
interface ThemeContextType {
    theme: typeof themes.light; // Type the theme to match any of the theme objects
    setTheme: (theme: keyof typeof themes) => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<keyof typeof themes>('light'); // Default theme is light

    return (
        <ThemeContext.Provider value={{ theme: themes[theme], setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
