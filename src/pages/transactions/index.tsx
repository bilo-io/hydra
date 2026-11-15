import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from '../../components/Core';
import TableTransactions, { ITransaction } from './TableTransactions';

export const Transactions: React.FC = () => {
  const { t } = useTranslation();

  const transactions: ITransaction[] = [
    {
      amount: 24500.0,
      currencyCode: 'ZAR',
      reference: 'ZA_BTC_001',
      date: '2025-01-12',
      asset: 'BTC',
      status: 'Settled',
    },
    {
      amount: 1250.0,
      currencyCode: 'USD',
      reference: 'US_ETH_042',
      date: '2025-01-10',
      asset: 'ETH',
      status: 'Settled',
    },
    {
      amount: 850.0,
      currencyCode: 'EUR',
      reference: 'EU_DOT_108',
      date: '2025-01-08',
      asset: 'DOT',
      status: 'Settled',
    },
    {
      amount: 15000.0,
      currencyCode: 'ZAR',
      reference: 'ZA_USDC_219',
      date: '2025-01-04',
      asset: 'USDC',
      status: 'Settled',
    },
    {
      amount: 3200.0,
      currencyCode: 'USD',
      reference: 'US_BTC_304',
      date: '2024-12-28',
      asset: 'BTC',
      status: 'Settled',
    },
  ];

  return (
    <View isPage className="w-full space-y-6 p-6">
      <div>
        <span className="chip mb-2">Audit & Settlement</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          <Text className="text-2xl font-bold">{t('transactions')}</Text>
        </h1>
        <p className="text-sm text-muted-foreground">
          Verified fiat and crypto settlement ledger across ZAR, USD, and EUR rails.
        </p>
      </div>
      <TableTransactions data={transactions} />
    </View>
  );
};

export default Transactions;
