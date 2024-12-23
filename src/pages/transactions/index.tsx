import React from 'react';
import { useTranslation } from 'react-i18next';

type TransactionsProps = object

export const Transactions: React.FC<TransactionsProps> = () => {
    const { t } = useTranslation();
    
    return (
        <div>{t('transactions')}</div>
    );
};

export default Transactions;