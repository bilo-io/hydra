// ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Core/Forms/Button';
import { View } from '../Core';

const ThemeSwitcher: React.FC = () => {
    const { setTheme } = useTheme();

    return (
        <View>
            <Button className='m-1' onClick={() => setTheme('light')}>Light</Button>
            <Button className='m-1' onClick={() => setTheme('dark')}>Dark</Button>
            <Button className='m-1' onClick={() => setTheme('stitch')}>Stitch</Button>
            <Button className='m-1' onClick={() => setTheme('ocean')}>Ocean</Button>
            <Button className='m-1' onClick={() => setTheme('custom')}>Custom</Button>
        </View>
    );
};

export default ThemeSwitcher;
