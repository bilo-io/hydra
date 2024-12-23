/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Table from '../../components/Core/Table';
import { ColumnDef } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../utils/format';
import { View } from '../../components/Core';

export interface ITransaction {
    date: string | Date,
    reference: string,
    amount: number,
    currencyCode: string,
}

interface TableTransactionsProps {
    data: ITransaction[]
}

export const TableTransactions: React.FC<TableTransactionsProps> = ({ data }) => {
    const { t } = useTranslation();

    const columns = React.useMemo<ColumnDef<unknown>[]>(() => [
        {
            accessorKey: 'date',
            header: () => t('date'),
            Cell: ({ value, row: { original } }: { value: string, row: { original: any } }) => (
                <div>({original.symbol}) {value}</div>
            )
        },
        {
            accessorKey: 'reference',
            header: t('reference'),
            Cell: ({ value, }: { value: string }) => (
                <div>{value}</div>
            )
        },
        {
            accessorKey: 'amount',
            header: t('amount'),
            Cell: ({ row: { original }}: { value: string, row: { original: ITransaction} }) => (
                <div>{formatCurrency(original.amount, original.currencyCode)}</div>
            )
        }
    ], [])

    return (
        <View className='w-full'>
            {/* @ts-ignore */}
            <Table data={data} columns={columns} />
        </View>
    );
};

export default TableTransactions;