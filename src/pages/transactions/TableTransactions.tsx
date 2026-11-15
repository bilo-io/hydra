/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Table from '../../components/Core/Table';
import { ColumnDef } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../utils/format';
import { View } from '../../components/Core';

export interface ITransaction {
  date: string | Date;
  reference: string;
  amount: number;
  currencyCode: string;
  asset?: string;
  status?: string;
}

interface TableTransactionsProps {
  data: ITransaction[];
}

export const TableTransactions: React.FC<TableTransactionsProps> = ({ data }) => {
  const { t } = useTranslation();

  const columns = React.useMemo<ColumnDef<unknown>[]>(
    () => [
      {
        accessorKey: 'date',
        header: () => <span>{t('date', 'Date')}</span>,
        cell: ({ row: { original } }: { row: { original: any } }) => (
          <span className="font-mono text-xs text-muted-foreground">
            {original.date instanceof Date
              ? original.date.toISOString().split('T')[0]
              : String(original.date)}
          </span>
        ),
      },
      {
        accessorKey: 'reference',
        header: () => <span>{t('reference', 'Reference')}</span>,
        cell: ({ getValue }: { getValue: () => any }) => (
          <span className="font-mono font-medium text-foreground">{String(getValue())}</span>
        ),
      },
      {
        accessorKey: 'asset',
        header: () => <span>Asset</span>,
        cell: ({ row: { original } }: { row: { original: any } }) => (
          <span className="rounded-md bg-primary/15 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
            {original.asset || original.currencyCode}
          </span>
        ),
      },
      {
        accessorKey: 'amount',
        header: () => <span>{t('amount', 'Amount')}</span>,
        cell: ({ row: { original } }: { row: { original: any } }) => (
          <span className="font-mono font-semibold text-foreground">
            {formatCurrency(original.amount, original.currencyCode)}
          </span>
        ),
      },
      {
        accessorKey: 'status',
        header: () => <span>Status</span>,
        cell: ({ row: { original } }: { row: { original: any } }) => (
          <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
            {original.status || 'Settled'}
          </span>
        ),
      },
    ],
    [t],
  );

  return (
    <View className="w-full">
      {/* @ts-ignore */}
      <Table data={data} columns={columns} />
    </View>
  );
};

export default TableTransactions;
