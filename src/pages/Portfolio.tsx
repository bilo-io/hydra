import React from 'react';
import { useTranslation } from 'react-i18next';

type LandingProps = object

export const Portfolio: React.FC<LandingProps> = () => {
    const { t } = useTranslation();
    
    return (
        <div>{t('portfolio')}</div>
    );
};

export default Portfolio;