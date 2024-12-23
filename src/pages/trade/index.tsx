import React from 'react';
import { useTranslation } from 'react-i18next';

type TradeProps = object

export const Trade: React.FC<TradeProps> = () => {
    const { t } = useTranslation();

    return (
        <div>{t('trade')}</div>
    );
};

export default Trade;