import React from 'react';
import FormSettings from './FormSettings';

type SettingsProps = object

export const Settings: React.FC<SettingsProps> = () => {
    return (
        <>
            <div>Settings</div>
            <FormSettings />
        </>
    );
};

export default Settings;