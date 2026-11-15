import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from '../../components/Core'

import TableTransactions, { ITransaction } from './TableTransactions'

type TransactionsProps = object

export const Transactions: React.FC<TransactionsProps> = () => {
    const { t } = useTranslation();

    const transactions: ITransaction[] = [
        {
            amount: 100,
            currencyCode: 'ZAR',
            reference: 'ZA_001',
            date: new Date('2024-12-01')
        },
        {
            amount: 100,
            currencyCode: 'ZAR',
            reference: 'ZA_001',
            date: new Date('2024-12-01')
        },
        {
            amount: 100,
            currencyCode: 'ZAR',
            reference: 'ZA_001',
            date: new Date('2024-12-01')
        },
        {
            amount: 100,
            currencyCode: 'ZAR',
            reference: 'ZA_001',
            date: new Date('2024-12-01')
        },
    ]

    return (
        <View isPage className='w-full'>
            <Text className='text-xl font-semibold'>{t('transactions')}</Text>
            <TableTransactions data={transactions} />
        </View>
    );
};

export default Transactions;