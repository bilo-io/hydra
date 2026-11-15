import React from 'react';
import * as HeroIcons from '@heroicons/react/24/solid'; // You can also use @heroicons/react/solid

interface DynamicIconProps extends React.SVGAttributes<SVGElement> {
    name: string; // The name of the icon as a string (e.g., "HomeIcon")
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
    const IconComponent = (HeroIcons as Record<string, React.FC<React.SVGAttributes<SVGElement>>>)[name + 'Icon'];

    if (!IconComponent) {
        console.error(`Icon "${name}Icon" does not exist in @heroicons/react/outline.`);
        return null;
    }

    return <IconComponent {...props} />;
};

export default DynamicIcon;
