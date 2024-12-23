// ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
    const { setTheme } = useTheme();

    return (
        <div>
            <button onClick={() => setTheme('light')}>Light Theme</button>
            <button onClick={() => setTheme('dark')}>Dark Theme</button>
            <button onClick={() => setTheme('stitch')}>Stitch Theme</button>
            <button onClick={() => setTheme('ocean')}>Ocean Theme</button>
            <button onClick={() => setTheme('custom')}>Custom Theme</button>
        </div>
    );
};

export default ThemeSwitcher;
