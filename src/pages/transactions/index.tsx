import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from '../../components/Core'

type TransactionsProps = object

export const Transactions: React.FC<TransactionsProps> = () => {
    const { t } = useTranslation();

    return (
        <View>
            <Text className='text-xl font-semibold'>{t('transactions')}</Text>
        </View>
    );
};

export default Transactions;