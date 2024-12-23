// ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from './ThemeContext';
import Button from '../components/Core/Forms/Button';

const ThemeSwitcher: React.FC = () => {
    const { setTheme } = useTheme();

    return (
        <div>
            <Button onClick={() => setTheme('light')}>Light Theme</Button>
            <Button onClick={() => setTheme('dark')}>Dark Theme</Button>
            <Button onClick={() => setTheme('stitch')}>Stitch Theme</Button>
            <Button onClick={() => setTheme('ocean')}>Ocean Theme</Button>
            <Button onClick={() => setTheme('custom')}>Custom Theme</Button>
        </div>
    );
};

export default ThemeSwitcher;
